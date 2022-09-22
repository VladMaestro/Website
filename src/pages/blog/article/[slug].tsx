import React, { ReactElement } from "react";

import type { NextPageWithLayout } from "../../_app";
import { BlogLayout } from "../../../Layouts/BlogLayout";
import { MediumArticle, SmallArticle, BreadCrumbs } from "../../../components";
import Image from "next/image";

const Article: NextPageWithLayout = () => {
	return (
		<article className="article">
			<div className="article__container">
				<h1 className="article__title">
					Hernandez leads Blue Jays to wild win over Rangers in Toronto`s 1st home opener since 2019
				</h1>
				<p className="article__description">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ducimus nostrum fugit, possimus quae expedita
					iure maiores quo dicta impedit sunt autem error consectetur porro inventore debitis cum alias quis.
				</p>
				<div className="article__picture">
					<Image
						src="/img/lesson/lesson.jpg"
						alt="Mountains"
						layout="fill"
						objectFit="cover"
						className="article__img"
					/>
				</div>
				<p className="article__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minima itaque corrupti veniam dignissimos.
					Corporis, aperiam iure reiciendis voluptates error dignissimos ut soluta expedita amet molestias eius autem
					blanditiis sapiente? Autem totam in ducimus earum rerum repellat sed possimus, praesentium maxime ut
					consectetur optio commodi voluptas ad minus voluptatibus deleniti at aliquid voluptate aut fugit! Quod
					pariatur assumenda impedit cumque.
				</p>
				<blockquote className="article__blockquote">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad voluptas quod adipisci esse, dignissimos
					fugiat hic ab libero. Soluta.
				</blockquote>
				<p className="article__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minima itaque corrupti veniam dignissimos.
					Corporis, aperiam iure reiciendis voluptates error dignissimos ut soluta expedita amet molestias eius autem
					blanditiis sapiente? Autem totam in ducimus earum rerum repellat sed possimus, praesentium maxime ut
					consectetur optio commodi voluptas ad minus voluptatibus deleniti at aliquid voluptate aut fugit! Quod
					pariatur assumenda impedit cumque.
				</p>
				<ul className="article__list">
					<li className="article__item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, odit!</li>
					<li className="article__item">Lorem ipsum dolor sit amet.</li>
					<li className="article__item">Lorem ipsum dolor sit.</li>
					<li className="article__item">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
				</ul>
				<ol className="article__list">
					<li className="article__item">Lorem, ipsum dolor.</li>
					<li className="article__item">Lorem, ipsum.</li>
					<li className="article__item">Lorem ipsum dolor sit.</li>
					<li className="article__item">Lorem ipsum dolor sit amet.</li>
				</ol>
			</div>
		</article>
	);
};

Article.getLayout = function getLayout(page: ReactElement) {
	return <BlogLayout>{page}</BlogLayout>;
};

export default Article;
