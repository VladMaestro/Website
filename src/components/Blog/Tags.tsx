import { FC } from "react";
import Link from "next/link";

type TagsProps = {
	data: Array<{ name: string; slug: string }>;
};

export const Tags: FC<TagsProps> = ({ data }) => {
	return (
		<section className="tags" aria-labelledby="tagsSectionTitle">
			<div className="container">
				<h2 className="sr-only" id="tagsSectionTitle">
					All Tags
				</h2>
				<div className="tags__container">
					{data.map((item) => (
						<Link href={`/blog/${item.slug}`} key={item.slug}>
							<a className="tags__link">{item.name}</a>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};
