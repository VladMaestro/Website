import { useEffect, useRef, useState, ReactElement, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import { DiscussionEmbed } from "disqus-react";
import { ParsedUrlQuery } from "querystring";
import { Block, BLOCKS, Inline, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import type { NextPageWithLayout } from "../../_app";
import { BlogLayout } from "../../../Layouts/BlogLayout";
import { Subscribe } from "../../../components";

import { getAllPostsSlugs, getPostBySlug } from "../../../contentful";
import { formatDate } from "../../../utils/formatDate";

import { TextLinks } from "../../../@types/articles";
import { GetPostBySlugQuery } from "../../../@types/contentfulSchema";

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await getAllPostsSlugs();

	return {
		paths: slugs.postCollection.items.map((item) => ({ params: { slug: item.slug } })),
		fallback: false,
	};
};

type Props = {
	post: GetPostBySlugQuery;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const slugName = context.params!.slug;

	const post = await getPostBySlug(slugName);

	return {
		props: { post },
	};
};

type ArticleProps = {
	post: GetPostBySlugQuery;
};

const Article: NextPageWithLayout<ArticleProps> = ({ post }) => {
	const [comments, setComments] = useState(false);

	const disqusRef = useRef<HTMLDivElement>(null);

	const { title, smallDescription, previewImg, sys, tag, text } = post.postCollection.items[0];

	useEffect(() => {
		const obserOptions = {
			root: null,
			rootMargin: "0px",
			threshols: 0.7,
		};

		const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setComments(true);
					observer.unobserve(entry.target);
				}
			});
		};

		const disqusDiv = disqusRef.current;

		const observer = new IntersectionObserver(observerCallback, obserOptions);
		if (disqusDiv) observer.observe(disqusDiv);

		return () => {
			if (disqusDiv) observer.unobserve(disqusDiv);
		};
	}, []);

	function renderOptions(links: TextLinks) {
		const assetMap = new Map<
			string,
			{
				title: string;
				url: string;
				sys: {
					id: string;
				};
				width: number;
				height: number;
			}
		>();
		for (const asset of links.assets.block) {
			assetMap.set(asset.sys.id, asset);
		}

		const hyperLinksMap = new Map<
			string,
			| {
					__typename?: "Post";
					title: string;
					slug: string;
					sys: {
						id: string;
					};
			  }
			| {
					__typename?: "Tag";
					sys: {
						id: string;
					};
			  }
		>();
		for (const entry of links.entries.hyperlink) {
			hyperLinksMap.set(entry.sys.id, entry);
		}

		return {
			renderNode: {
				[BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
					const asset = assetMap.get(node.data.target.sys.id);
					return (
						<div className="article__picture">
							<Image
								width={asset?.width}
								height={asset?.height}
								src={asset!.url}
								placeholder="blur"
								blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNkNWQ1ZDUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMmUyZTIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cxKSIvPjwvc3ZnPg=="
								style={{ borderRadius: 10 }}
								alt={asset?.title}
								className="article__img"
							/>
						</div>
					);
				},
				[BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => {
					return <p className="article__text">{children}</p>;
				},
				[BLOCKS.HEADING_2]: (node: Block | Inline, children: ReactNode) => <h2 className="article__h2">{children}</h2>,
				[BLOCKS.HEADING_3]: (node: Block | Inline, children: ReactNode) => <h3 className="article__h3">{children}</h3>,
				[BLOCKS.HEADING_4]: (node: Block | Inline, children: ReactNode) => <h4 className="article__h4">{children}</h4>,
				[BLOCKS.HEADING_5]: (node: Block | Inline, children: ReactNode) => <h5 className="article__h5">{children}</h5>,
				[BLOCKS.QUOTE]: (node: Block | Inline, children: ReactNode) => (
					<blockquote className="article__blockquote">{children}</blockquote>
				),
				[BLOCKS.UL_LIST]: (node: Block | Inline, children: ReactNode) => <ul className="article__list">{children}</ul>,
				[BLOCKS.OL_LIST]: (node: Block | Inline, children: ReactNode) => <ol className="article__list">{children}</ol>,
				[BLOCKS.LIST_ITEM]: (node: Block | Inline, children: ReactNode) => (
					<li className="article__item">{children}</li>
				),
				[BLOCKS.HR]: (node: Block | Inline, children: ReactNode) => <hr className="article__hr" />,
				[BLOCKS.TABLE]: (node: Block | Inline, children: ReactNode) => (
					<table className="article__table">{children}</table>
				),
				[BLOCKS.TABLE_HEADER_CELL]: (node: Block | Inline, children: ReactNode) => (
					<th className="article__th">{children}</th>
				),
				[BLOCKS.TABLE_ROW]: (node: Block | Inline, children: ReactNode) => <tr className="article__tr">{children}</tr>,
				[BLOCKS.TABLE_CELL]: (node: Block | Inline, children: ReactNode) => <td className="article__td">{children}</td>,
				[INLINES.HYPERLINK]: (node: Block | Inline, children: ReactNode) => (
					<a className="article__link" target="_blank" rel="noreferrer noopener" href={`${node.data.uri}`}>
						{children}
					</a>
				),
				[INLINES.ENTRY_HYPERLINK]: (node: Block | Inline, children: ReactNode) => {
					const entry = hyperLinksMap.get(node.data.target.sys.id);
					return (
						<Link href={`/blog/article/${entry?.__typename === "Post" ? entry.slug : null}`}>
							<a className="article__link">{children}</a>
						</Link>
					);
				},
			},
		};
	}

	return (
		<>
			<article className="article">
				<div className="article__container">
					<h1 className="article__title">{title}</h1>
					<p className="article__description">{smallDescription}</p>
					<div className="article__meta">
						<span className="tag">{tag.name}</span>
						<span className="time">{formatDate(sys.publishedAt)}</span>
					</div>
					<div className="article__preview">
						<Image
							src={previewImg.url}
							alt={previewImg.title}
							placeholder="blur"
							blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNkNWQ1ZDUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMmUyZTIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cxKSIvPjwvc3ZnPg=="
							style={{ borderRadius: 10 }}
							layout="fill"
							objectFit="cover"
							className="article__img"
						/>
					</div>
					{documentToReactComponents(text.json, renderOptions(text.links))}
					<div ref={disqusRef}>{comments && <DiscussionEmbed shortname="easyen-1" config={{ title }} />}</div>
				</div>
			</article>
			<Subscribe />
		</>
	);
};

Article.getLayout = function getLayout(page: ReactElement) {
	return <BlogLayout>{page}</BlogLayout>;
};

export default Article;
