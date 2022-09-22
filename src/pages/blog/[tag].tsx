import React, { ReactElement } from "react";

import type { NextPageWithLayout } from "../_app";
import { BlogLayout } from "../../Layouts/BlogLayout";
import { MediumArticle, SmallArticle, BreadCrumbs } from "../../components";

const Tag: NextPageWithLayout = () => {
	return (
		<section className="tagSection" aria-labelledby="tagSectionTitle">
			<div className="container">
				<h1 className="tagSection__title" id="tagSectionTitle">
					Tag
				</h1>
				<BreadCrumbs />
				<div className="tagSection__container">
					<div className="tagSection__left">
						<MediumArticle />
						<MediumArticle />
						<MediumArticle />
						<MediumArticle />
					</div>
					<div className="tagSection__right">
						<SmallArticle description />
						<SmallArticle description />
						<SmallArticle description />
						<SmallArticle description />
						<SmallArticle description />
						<SmallArticle description />
						<SmallArticle description />
						<SmallArticle description />
						<SmallArticle description />
						<SmallArticle description />
						<SmallArticle description />
						<SmallArticle description />
					</div>
				</div>
			</div>
		</section>
	);
};

Tag.getLayout = function getLayout(page: ReactElement) {
	return <BlogLayout>{page}</BlogLayout>;
};

export default Tag;
