import { gql } from "@apollo/client";
import {
	GetAllTagsQuery,
	GetAllTagsQueryVariables,
	GetAllPostsSlugsQuery,
	GetAllPostsSlugsQueryVariables,
	GetFirst5PostsSlugsQuery,
	GetFirst5PostsSlugsQueryVariables,
	GetPostBySlugQuery,
	GetPostBySlugQueryVariables,
	GetPostsByTagQuery,
	GetPostsByTagQueryVariables,
	MainPageQuery,
	MainPageQueryVariables,
	GetAllRecommendedPostsQuery,
	GetAllRecommendedPostsQueryVariables,
} from "../@types/contentfulSchema";

import { apolloClient } from "./apolloClient";
import { mixArticleFragment, smallArticleFragment } from "./fragments";

export const getAllTags = async () => {
	const allTagsQuery = gql`
		query getAllTags {
			tagCollection {
				items {
					name
					slug
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GetAllTagsQuery, GetAllTagsQueryVariables>({
		query: allTagsQuery,
	});

	return data;
};

export const getFirst5PostsSlugs = async () => {
	const first5PostsSlugs = gql`
		query getFirst5PostsSlugs {
			postCollection(limit: 5, where: { recommended: false }) {
				items {
					slug
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GetFirst5PostsSlugsQuery, GetFirst5PostsSlugsQueryVariables>({
		query: first5PostsSlugs,
	});

	return data;
};

export const getMainPageData = async (first5Slugs: string[]) => {
	const mainPageData = gql`
		${smallArticleFragment}
		${mixArticleFragment}

		query mainPage($first5Slugs: [String]) {
			tagCollection {
				items {
					name
					slug
				}
			}
			posts: postCollection(limit: 5, where: { recommended: false }) {
				items {
					...mixArticle
				}
			}
			recommended: postCollection(limit: 5, where: { recommended: true }) {
				items {
					...smallArticle
				}
			}
			toefl: postCollection(
				limit: 5
				where: { AND: [{ tag: { name: "TOEFL" } }, { recommended: false }, { slug_not_in: $first5Slugs }] }
			) {
				items {
					...mixArticle
				}
			}
			grammar: postCollection(
				limit: 4
				where: { AND: [{ tag: { name: "Grammar" } }, { recommended: false }, { slug_not_in: $first5Slugs }] }
			) {
				items {
					...mixArticle
				}
			}
			usCulture: postCollection(
				limit: 4
				where: { AND: [{ tag: { name: "U.S. Culture" } }, { recommended: false }, { slug_not_in: $first5Slugs }] }
			) {
				items {
					...mixArticle
				}
			}
			det: postCollection(
				limit: 4
				where: { AND: [{ tag: { name: "DET" } }, { recommended: false }, { slug_not_in: $first5Slugs }] }
			) {
				items {
					...mixArticle
				}
			}
			speakingTips: postCollection(
				limit: 4
				where: { AND: [{ tag: { name: "Speaking Tips" } }, { recommended: false }, { slug_not_in: $first5Slugs }] }
			) {
				items {
					...mixArticle
				}
			}
		}
	`;

	const { data } = await apolloClient.query<MainPageQuery, MainPageQueryVariables>({
		query: mainPageData,
		variables: {
			first5Slugs,
		},
	});

	return data;
};

export const getPostsByTagName = async (tagName: string | string[]) => {
	const oneTagName = typeof tagName === "string" ? tagName : tagName[0];

	const postsByTagName = gql`
		query getPostsByTag($tagName: String) {
			postCollection(where: { tag: { slug: $tagName } }) {
				total
				items {
					title
					slug
					previewImg {
						title
						url
					}
					smallDescription
					tag {
						name
					}
					sys {
						publishedAt
					}
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GetPostsByTagQuery, GetPostsByTagQueryVariables>({
		query: postsByTagName,
		variables: {
			tagName: oneTagName,
		},
	});

	return data;
};

export const getAllRecommendedPost = async () => {
	const allRecommendedPost = gql`
		query getAllRecommendedPosts {
			postCollection(where: { recommended: true }) {
				total
				items {
					title
					slug
					previewImg {
						title
						url
					}
					smallDescription
					tag {
						name
					}
					sys {
						publishedAt
					}
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GetAllRecommendedPostsQuery, GetAllRecommendedPostsQueryVariables>({
		query: allRecommendedPost,
	});

	return data;
};

export const getAllPostsSlugs = async () => {
	const allPostsSlugs = gql`
		query getAllPostsSlugs {
			postCollection {
				items {
					slug
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GetAllPostsSlugsQuery, GetAllPostsSlugsQueryVariables>({
		query: allPostsSlugs,
	});

	return data;
};

export const getPostBySlug = async (slug: string | string[]) => {
	const oneSlug = typeof slug === "string" ? slug : slug[0];

	const postBySlug = gql`
		query getPostBySlug($slug: String) {
			postCollection(where: { slug: $slug }, limit: 1) {
				items {
					title
					sys {
						publishedAt
					}
					previewImg {
						title
						url
					}
					smallDescription
					text {
						json
					}
					tag {
						name
					}
				}
			}
		}
	`;

	const { data } = await apolloClient.query<GetPostBySlugQuery, GetPostBySlugQueryVariables>({
		query: postBySlug,
		variables: {
			slug: oneSlug,
		},
	});

	return data;
};
