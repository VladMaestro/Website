import React from "react";

import { BigArticle } from "./BigArticle";
import { Recommended } from "./Recommended";
import { MediumArticle } from "./MediumArticle";

export const LastArticles: React.FC = () => {
	return (
		<div className="lastArticles">
			<div className="container">
				<div className="lastArticles__container">
					<section className="lastArticles__left" aria-labelledby="bigArticleTitle">
						<BigArticle />
						<MediumArticle />
						<MediumArticle />
						<MediumArticle />
						<MediumArticle />
					</section>
					<Recommended />
				</div>
			</div>
		</div>
	);
};
