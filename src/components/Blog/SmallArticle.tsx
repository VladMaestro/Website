import React from "react";
import Link from "next/link";

type SmallArticleProps = {
	underline?: boolean;
};

export const SmallArticle: React.FC<SmallArticleProps> = ({ underline }) => {
	return (
		<article className={`smallArticle ${underline ? "smallArticle--underline" : ""}`}>
			<h3 className="h3">
				<Link href="#">
					<a className="link">Very long title about some usefull tips</a>
				</Link>
			</h3>
			<div className="smallArticle__info">
				<time dateTime="14-01-2022" className="time">
					14 January 2022
				</time>
				<span className="tag">Grammer</span>
			</div>
		</article>
	);
};
