import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { formatDate } from "../../utils/formatDate";

import { mediumArticleType } from "../../@types/articles";

type MediumArticleProps = {
	data: mediumArticleType;
};

export const MediumArticle: FC<MediumArticleProps> = ({ data }) => {
	return (
		<article className="mediumllArticle">
			<div className="mediumllArticle__picture">
				<Link href={`/blog/article/${data.slug}`}>
					<a className="mediumllArticle__pictureLink"></a>
				</Link>
				<Image
					src={data.previewImg.url}
					alt={data.previewImg.title}
					placeholder="blur"
					blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNkNWQ1ZDUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMmUyZTIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cxKSIvPjwvc3ZnPg=="
					style={{ borderRadius: 10 }}
					layout="fill"
					objectFit="cover"
					className="mediumllArticle__img"
				/>
			</div>
			<time className="mediumllArticle__time time" dateTime="09-04-2022">
				{formatDate(data.sys.publishedAt)}
			</time>
			<h3 className="h3">
				<Link href={`/blog/article/${data.slug}`}>
					<a className="link">{data.title}</a>
				</Link>
			</h3>
			<span className="tag">{data.tag.name}</span>
		</article>
	);
};
