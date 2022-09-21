import React from "react";

import { SmallArticle } from "./SmallArticle";

export const Recommended: React.FC = () => {
	return (
		<div className="recommended">
			<div className="recommended__container">
				<h2 className="h2 recommended__title">Recommended</h2>
				<SmallArticle underline />
				<SmallArticle underline />
				<SmallArticle underline />
				<SmallArticle underline />
				<SmallArticle underline />
				<SmallArticle underline />
			</div>
		</div>
	);
};
