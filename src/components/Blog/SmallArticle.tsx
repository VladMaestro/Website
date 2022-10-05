import { FC } from "react";
import Link from "next/link";

import useFormattedDate from "../../hooks/useFormattedDate";

import { SmallArticleType } from "../../@types/articles";

type SmallArticleProps = {
	underline?: boolean;
	description?: boolean;
	data: SmallArticleType;
};

export const SmallArticle: FC<SmallArticleProps> = ({ underline, description, data }) => {
	const date = useFormattedDate(data.sys.publishedAt);

	return (
		<article className={`smallArticle ${underline ? "smallArticle--underline" : ""}`}>
			<h3 className="h3">
				<Link href={`/blog/article/${data.slug}`}>
					<a className="link">{data.title}</a>
				</Link>
			</h3>
			<p className={`smallArticle__text ${description ? "smallArticle__text--visible" : ""}`}>
				{data.smallDescription}
			</p>
			<div className="smallArticle__info">
				<time dateTime="14-01-2022" className="time">
					{date}
				</time>
				<span className="tag">{data.tag.name}</span>
			</div>
		</article>
	);
};
