import React from "react";
import Link from "next/link";

import { MediumArticle } from "./MediumArticle";

export const Toefl: React.FC = () => {
	return (
		<section className="toefl">
			<div className="container">
				<h2 className="h2">
					<Link href="#">
						<a className="link">
							TOEFL <span className="toefl__arrow">&#8227;</span>
						</a>
					</Link>
				</h2>
				<div className="toefl__container">
					<MediumArticle />
					<MediumArticle />
					<MediumArticle />
					<MediumArticle />
					<MediumArticle />
					<MediumArticle />
				</div>
			</div>
		</section>
	);
};
