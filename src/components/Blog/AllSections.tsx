import React from "react";
import Link from "next/link";

import { MediumArticle } from "./MediumArticle";
import { SmallArticle } from "./SmallArticle";

export const AllSections: React.FC = () => {
	return (
		<section className="allSections">
			<div className="container">
				<div className="allSections__container">
					<div className="allSections__item">
						<h2 className="h2">
							<Link href="#">
								<a className="link">
									Canada <span className="toefl__arrow">&#8227;</span>
								</a>
							</Link>
						</h2>
						<div className="allSections__articles">
							<MediumArticle />
							<SmallArticle />
							<SmallArticle />
							<SmallArticle />
						</div>
					</div>
					<div className="allSections__item">
						<h2 className="h2">
							<Link href="#">
								<a className="link">
									World <span className="toefl__arrow">&#8227;</span>
								</a>
							</Link>
						</h2>
						<div className="allSections__articles">
							<MediumArticle />
							<SmallArticle />
							<SmallArticle />
							<SmallArticle />
						</div>
					</div>
					<div className="allSections__item">
						<h2 className="h2">
							<Link href="#">
								<a className="link">
									Business <span className="toefl__arrow">&#8227;</span>
								</a>
							</Link>
						</h2>
						<div className="allSections__articles">
							<MediumArticle />
							<SmallArticle />
							<SmallArticle />
							<SmallArticle />
						</div>
					</div>
					<div className="allSections__item">
						<h2 className="h2">
							<Link href="#">
								<a className="link">
									Politics <span className="toefl__arrow">&#8227;</span>
								</a>
							</Link>
						</h2>
						<div className="allSections__articles">
							<MediumArticle />
							<SmallArticle />
							<SmallArticle />
							<SmallArticle />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
