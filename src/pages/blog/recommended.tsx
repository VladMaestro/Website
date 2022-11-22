import { ReactElement } from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import type { NextPageWithLayout } from "../_app";
import { BlogLayout } from "../../Layouts/BlogLayout";
import { MediumArticle, SmallArticle, BreadCrumbs } from "../../components";

import { getAllRecommendedPost } from "../../contentful";

import { GetAllRecommendedPostsQuery } from "../../@types/contentfulSchema";

type Props = {
	posts: GetAllRecommendedPostsQuery;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const posts = await getAllRecommendedPost();

	return {
		props: { posts },
	};
};

type RecommendedProps = {
	posts: GetAllRecommendedPostsQuery;
};

const Recommended: NextPageWithLayout<RecommendedProps> = ({ posts }) => {
	return (
		<section className="tagSection" aria-labelledby="tagSectionTitle">
			<div className="container">
				<h1 className="tagSection__title" id="tagSectionTitle">
					Recommended
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

Recommended.getLayout = function getLayout(page: ReactElement) {
	return <BlogLayout>{page}</BlogLayout>;
};

export default Recommended;
