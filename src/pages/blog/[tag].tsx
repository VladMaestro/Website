import { ReactElement } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

import type { NextPageWithLayout } from "../_app";
import { BlogLayout } from "../../Layouts/BlogLayout";
import { MediumArticle, SmallArticle, BreadCrumbs } from "../../components";

import { getAllTags, getPostsByTagName } from "../../contentful";

import { GetPostsByTagQuery } from "../../@types/contentfulSchema";

export const getStaticPaths: GetStaticPaths = async () => {
	const tags = await getAllTags();

	return {
		paths: tags.tagCollection.items.map((item) => ({ params: { tag: item.slug } })),
		fallback: false,
	};
};

type Props = {
	posts: GetPostsByTagQuery;
};

interface Params extends ParsedUrlQuery {
	tag: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const tagName = context.params!.tag;

	const posts = await getPostsByTagName(tagName);

	return {
		props: { posts },
	};
};

type TagProps = {
	posts: GetPostsByTagQuery;
};

const Tag: NextPageWithLayout<TagProps> = ({ posts }) => {
	return (
		<section className="tagSection" aria-labelledby="tagSectionTitle">
			<div className="container">
				<h1 className="tagSection__title" id="tagSectionTitle">
					Tag
				</h1>
				<BreadCrumbs />
				<div className="tagSection__container">
					{posts && Object.keys(posts).length !== 0 && posts.postCollection.total !== 0 ? (
						<>
							<div className="tagSection__left">
								{posts.postCollection.items.slice(0, 4).map((item) => (
									<MediumArticle key={item.slug} data={item} />
								))}
							</div>
							<div className="tagSection__right">
								{posts.postCollection.items.slice(4).map((item) => (
									<SmallArticle key={item.slug} description data={item} />
								))}
							</div>
						</>
					) : (
						<p>No posts</p>
					)}
				</div>
			</div>
		</section>
	);
};

Tag.getLayout = function getLayout(page: ReactElement) {
	return <BlogLayout>{page}</BlogLayout>;
};

export default Tag;
