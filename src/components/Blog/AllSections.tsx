import React from "react";
import Link from "next/link";

import { MediumArticle } from "./MediumArticle";
import { SmallArticle } from "./SmallArticle";

export const AllSections: React.FC = () => {
	return (
		<div className="allSections">
			<div className="container">
				<div className="allSections__container">
					<section className="allSections__item" aria-labelledby="allSectionsTitle1">
						<h2 className="h2" id="allSectionsTitle1">
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
					</section>
					<section className="allSections__item" aria-labelledby="allSectionsTitle2">
						<h2 className="h2" id="allSectionsTitle2">
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
					</section>
					<section className="allSections__item" aria-labelledby="allSectionsTitle3">
						<h2 className="h2" id="allSectionsTitle3">
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
					</section>
					<section className="allSections__item" aria-labelledby="allSectionsTitle4">
						<h2 className="h2" id="allSectionsTitle4">
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
					</section>
				</div>
			</div>
		</div>
	);
};
