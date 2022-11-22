import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import useFormattedDate from "../../hooks/useFormattedDate";

import { bigArticleType } from "../../@types/articles";

type BigArticleProps = {
	data: bigArticleType;
};

export const BigArticle: FC<BigArticleProps> = ({ data }) => {
	const date = useFormattedDate(data.sys.publishedAt);

	return (
		<article className="bigArticle">
			<div className="bigArticle__pictire">
				<Link href={`/blog/article/${data.slug}`}>
					<a className="bigArticle__pictireLink"></a>
				</Link>
				<Image
					src={data.previewImg.url}
					alt={data.previewImg.title}
					placeholder="blur"
					blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNkNWQ1ZDUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMmUyZTIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cxKSIvPjwvc3ZnPg=="
					style={{ borderRadius: 10 }}
					layout="fill"
					objectFit="cover"
					className="bigArticle__img"
				/>
			</div>
			<div className="bigArticle__info">
				<span className="bigArticle__tag">{data.tag.name}</span>
				<h1 className="bigArticle__title" id="bigArticleTitle">
					<Link href={`/blog/article/${data.slug}`}>
						<a className="bigArticle__link">{data.title}</a>
					</Link>
				</h1>
				<p className="bigArticle__description">{data.smallDescription}</p>
				<time className="time">{date}</time>
			</div>
		</article>
	);
};
