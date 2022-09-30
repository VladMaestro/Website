import { FC } from "react";

import { BigArticle } from "./BigArticle";
import { MediumArticle } from "./MediumArticle";
import { Recommended } from "./Recommended";

import { mixArticleType, SmallArticleType } from "../../@types/articles";

type LastArticlesProps = {
	posts: mixArticleType[];
	recommendedPosts: SmallArticleType[];
};

export const LastArticles: FC<LastArticlesProps> = ({ posts, recommendedPosts }) => {
	return (
		<div className="lastArticles">
			<div className="container">
				<div className="lastArticles__container">
					<section className="lastArticles__left" aria-labelledby="bigArticleTitle">
						<BigArticle data={posts[0]} />
						<div className="lastArticles__wrapper">
							{posts.slice(1).map((item) => (
								<MediumArticle key={item.slug} data={item} />
							))}
						</div>
					</section>
					<Recommended data={recommendedPosts} />
				</div>
			</div>
		</div>
	);
};
