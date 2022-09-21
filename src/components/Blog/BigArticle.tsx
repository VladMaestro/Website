import React from "react";
import Image from "next/image";
import Link from "next/link";

export const BigArticle: React.FC = () => {
	return (
		<article className="bigArticle">
			<div className="bigArticle__pictire">
				<Image
					src="/img/lesson/lesson.jpg"
					alt="Mountains"
					layout="fill"
					objectFit="cover"
					className="bigArticle__img"
				/>
			</div>
			<div className="bigArticle__info">
				<span className="bigArticle__tag">Grammer</span>
				<h1 className="bigArticle__title">
					<Link href="#">
						<a className="bigArticle__link">
							Hernandez leads Blue Jays to wild win over Rangers in Toronto`s 1st home opener since 2019
						</a>
					</Link>
				</h1>
				<p className="bigArticle__description">
					Rogers Center sees 1st sellout since March 29, 2018 for Totonto`s 10-8 comeback win
				</p>
				<time className="time">9 April 2022</time>
			</div>
		</article>
	);
};
