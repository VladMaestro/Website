import React from "react";

import { SmallArticle } from "./SmallArticle";

export const Recommended: React.FC = () => {
	return (
		<section className="recommended" aria-labelledby="recomendedSectionTitle">
			<div className="recommended__container">
				<h2 className="h2 recommended__title" id="recomendedSectionTitle">
					Recommended
				</h2>
				<SmallArticle underline />
				<SmallArticle underline />
				<SmallArticle underline />
				<SmallArticle underline />
				<SmallArticle underline />
				<SmallArticle underline />
			</div>
		</section>
	);
};
