import { ReactElement } from "react";

import type { NextPageWithLayout } from "../_app";
import { BlogLayout } from "../../Layouts/BlogLayout";
import { AllSections, LastArticles, Search, Seo, Subscribe, Tags, Toefl } from "../../components";

import { getFirst5PostsSlugs, getMainPageData } from "../../contentful";

import { MainPageQuery } from "../../@types/contentfulSchema";

export const getStaticProps = async () => {
	const slugs = await getFirst5PostsSlugs();
	const fiveSlugs = slugs.postCollection.items.map((item) => item.slug);

	const mainPageData = await getMainPageData(fiveSlugs);

	return {
		props: {
			mainPageData,
		},
	};
};

type BlogProps = {
	mainPageData: MainPageQuery;
};

const Blog: NextPageWithLayout<BlogProps> = ({ mainPageData }) => {
	return (
		<>
			<Seo />
			<Search />
			<Tags data={mainPageData.tagCollection.items} />
			<LastArticles posts={mainPageData.posts.items} recommendedPosts={mainPageData.recommended.items} />
			<Toefl data={mainPageData.toefl.items} />
			<AllSections
				grammar={mainPageData.grammar.items}
				usCulture={mainPageData.usCulture.items}
				det={mainPageData.det.items}
				speakingTips={mainPageData.speakingTips.items}
			/>
			<Subscribe />
		</>
	);
};

Blog.getLayout = function getLayout(page: ReactElement) {
	return <BlogLayout>{page}</BlogLayout>;
};

export default Blog;
