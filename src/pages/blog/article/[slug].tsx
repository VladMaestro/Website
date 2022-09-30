import { useEffect, useRef, useState, ReactElement } from "react";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import { DiscussionEmbed } from "disqus-react";
import { ParsedUrlQuery } from "querystring";

import type { NextPageWithLayout } from "../../_app";
import { BlogLayout } from "../../../Layouts/BlogLayout";

import { getAllPostsSlugs, getPostBySlug } from "../../../contentful";
import { formatDate } from "../../../utils/formatDate";

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

	const { title, smallDescription, previewImg, sys, tag } = post.postCollection.items[0];

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

	return (
		<article className="article">
			<div className="article__container">
				<h1 className="article__title">{title}</h1>
				<p className="article__description">{smallDescription}</p>
				<div className="article__meta">
					<span className="tag">{tag.name}</span>
					<span className="time">{formatDate(sys.publishedAt)}</span>
				</div>
				<div className="article__picture">
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
				<p className="article__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minima itaque corrupti veniam dignissimos.
					Corporis, aperiam iure reiciendis voluptates error dignissimos ut soluta expedita amet molestias eius autem
					blanditiis sapiente? Autem totam in ducimus earum rerum repellat sed possimus, praesentium maxime ut
					consectetur optio commodi voluptas ad minus voluptatibus deleniti at aliquid voluptate aut fugit! Quod
					pariatur assumenda impedit cumque.
				</p>
				<blockquote className="article__blockquote">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad voluptas quod adipisci esse, dignissimos
					fugiat hic ab libero. Soluta.
				</blockquote>
				<p className="article__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minima itaque corrupti veniam dignissimos.
					Corporis, aperiam iure reiciendis voluptates error dignissimos ut soluta expedita amet molestias eius autem
					blanditiis sapiente? Autem totam in ducimus earum rerum repellat sed possimus, praesentium maxime ut
					consectetur optio commodi voluptas ad minus voluptatibus deleniti at aliquid voluptate aut fugit! Quod
					pariatur assumenda impedit cumque.
				</p>
				<ul className="article__list">
					<li className="article__item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, odit!</li>
					<li className="article__item">Lorem ipsum dolor sit amet.</li>
					<li className="article__item">Lorem ipsum dolor sit.</li>
					<li className="article__item">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
				</ul>
				<ol className="article__list">
					<li className="article__item">Lorem, ipsum dolor.</li>
					<li className="article__item">Lorem, ipsum.</li>
					<li className="article__item">Lorem ipsum dolor sit.</li>
					<li className="article__item">Lorem ipsum dolor sit amet.</li>
				</ol>
				<div ref={disqusRef}>{comments && <DiscussionEmbed shortname="easyen-1" config={{ title }} />}</div>
			</div>
		</article>
	);
};

Article.getLayout = function getLayout(page: ReactElement) {
	return <BlogLayout>{page}</BlogLayout>;
};

export default Article;
