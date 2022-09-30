import { FC } from "react";
import Link from "next/link";

import { MediumArticle } from "./MediumArticle";
import { SmallArticle } from "./SmallArticle";

import { mixArticleType } from "../../@types/articles";

type AllSectionsProps = {
	grammar: mixArticleType[];
	usCulture: mixArticleType[];
	det: mixArticleType[];
	speakingTips: mixArticleType[];
};

export const AllSections: FC<AllSectionsProps> = ({ grammar, usCulture, det, speakingTips }) => {
	return (
		<div className="allSections">
			<div className="container">
				<div className="allSections__container">
					<section className="allSections__item" aria-labelledby="allSectionsTitle1">
						<h2 className="h2" id="allSectionsTitle1">
							<Link href="/blog/grammar">
								<a className="link">
									Grammar <span className="toefl__arrow">&#8227;</span>
								</a>
							</Link>
						</h2>
						<div className="allSections__articles">
							<MediumArticle data={grammar[0]} />
							{grammar.slice(1).map((item) => (
								<SmallArticle key={item.slug} data={item} />
							))}
						</div>
					</section>
					<section className="allSections__item" aria-labelledby="allSectionsTitle2">
						<h2 className="h2" id="allSectionsTitle2">
							<Link href="/blog/us-culture">
								<a className="link">
									US Culture <span className="toefl__arrow">&#8227;</span>
								</a>
							</Link>
						</h2>
						<div className="allSections__articles">
							<MediumArticle data={usCulture[0]} />
							{usCulture.slice(1).map((item) => (
								<SmallArticle key={item.slug} data={item} />
							))}
						</div>
					</section>
					<section className="allSections__item" aria-labelledby="allSectionsTitle3">
						<h2 className="h2" id="allSectionsTitle3">
							<Link href="/blog/det">
								<a className="link">
									DET <span className="toefl__arrow">&#8227;</span>
								</a>
							</Link>
						</h2>
						<div className="allSections__articles">
							<MediumArticle data={det[0]} />
							{det.slice(1).map((item) => (
								<SmallArticle key={item.slug} data={item} />
							))}
						</div>
					</section>
					<section className="allSections__item" aria-labelledby="allSectionsTitle4">
						<h2 className="h2" id="allSectionsTitle4">
							<Link href="/blog/speaking-tips">
								<a className="link">
									Speaking Tips <span className="toefl__arrow">&#8227;</span>
								</a>
							</Link>
						</h2>
						<div className="allSections__articles">
							<MediumArticle data={speakingTips[0]} />
							{speakingTips.slice(1).map((item) => (
								<SmallArticle key={item.slug} data={item} />
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};
