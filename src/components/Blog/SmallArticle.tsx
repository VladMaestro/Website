import React from "react";
import Link from "next/link";

type SmallArticleProps = {
	underline?: boolean;
	description?: boolean;
};

export const SmallArticle: React.FC<SmallArticleProps> = ({ underline, description }) => {
	return (
		<article className={`smallArticle ${underline ? "smallArticle--underline" : ""}`}>
			<h3 className="h3">
				<Link href="/blog/article/test">
					<a className="link">Very long title about some usefull tips</a>
				</Link>
			</h3>
			<p className={`smallArticle__text ${description ? "smallArticle__text--visible" : ""}`}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores unde natus laborum? Architecto, eligendi?
				Ipsum cum velit odio asperiores expedita?
			</p>
			<div className="smallArticle__info">
				<time dateTime="14-01-2022" className="time">
					14 January 2022
				</time>
				<span className="tag">Grammer</span>
			</div>
		</article>
	);
};
