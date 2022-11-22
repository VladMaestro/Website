import { FC } from "react";
import Link from "next/link";

import { MediumArticle } from "./MediumArticle";

import { mediumArticleType } from "../../@types/articles";

type ToeflProps = {
	data: mediumArticleType[];
};

export const Toefl: FC<ToeflProps> = ({ data }) => {
	return (
		<section className="toefl" aria-labelledby="toeflSectionTitle">
			<div className="container">
				<h2 className="h2" id="toeflSectionTitle">
					<Link href="/blog/toefl">
						<a className="link">
							TOEFL <span className="toefl__arrow">&#8227;</span>
						</a>
					</Link>
				</h2>
				<div className="toefl__container">
					{data.map((item) => (
						<MediumArticle key={item.slug} data={item} />
					))}
				</div>
			</div>
		</section>
	);
};
