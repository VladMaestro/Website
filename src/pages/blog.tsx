import React, { ReactElement } from "react";

import type { NextPageWithLayout } from "./_app";
import { BlogLayout } from "../Layouts/BlogLayout";

import { AllSections, LastArticles, Tags, Toefl } from "../components";

const Blog: NextPageWithLayout = () => {
	return (
		<>
			<Tags />
			<LastArticles />
			<Toefl />
			<AllSections />
		</>
	);
};

Blog.getLayout = function getLayout(page: ReactElement) {
	return <BlogLayout>{page}</BlogLayout>;
};

export default Blog;
