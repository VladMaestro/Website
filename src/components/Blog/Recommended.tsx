import { FC } from "react";

import { SmallArticle } from "./SmallArticle";

import { SmallArticleType } from "../../@types/articles";

type RecommendedProps = {
	data: SmallArticleType[];
};

export const Recommended: FC<RecommendedProps> = ({ data }) => {
	return (
		<section className="recommended" aria-labelledby="recomendedSectionTitle">
			<div className="recommended__container">
				<h2 className="h2 recommended__title" id="recomendedSectionTitle">
					Recommended
				</h2>
				{data.map((item) => (
					<SmallArticle key={item.slug} underline data={item} />
				))}
			</div>
		</section>
	);
};
