import React from "react";
import Image from "next/image";
import Link from "next/link";

export const MediumArticle: React.FC = () => {
	return (
		<article className="mediumllArticle">
			<div className="mediumllArticle__picture">
				<Image
					src="/img/lesson/lesson.jpg"
					alt="Mountains"
					layout="fill"
					objectFit="cover"
					className="mediumllArticle__img"
				/>
			</div>
			<time className="mediumllArticle__time time" dateTime="09-04-2022">
				9 April 2022
			</time>

			<h3 className="h3">
				<Link href="#">
					<a className="link">Freeland makes a modern supply-side bet on Canada`s future economic growth</a>
				</Link>
			</h3>
			<span className="tag">TOEFL</span>
		</article>
	);
};
