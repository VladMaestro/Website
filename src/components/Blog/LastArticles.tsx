import React from "react";

import { BigArticle } from "./BigArticle";
import { Recommended } from "./Recommended";
import { MediumArticle } from "./MediumArticle";

export const LastArticles: React.FC = () => {
	return (
		<section className="lastArticles">
			<div className="container">
				<div className="lastArticles__container">
					<div className="lastArticles__left">
						<BigArticle />
						<MediumArticle />
						<MediumArticle />
						<MediumArticle />
						<MediumArticle />
					</div>
					<Recommended />
				</div>
			</div>
		</section>
	);
};
