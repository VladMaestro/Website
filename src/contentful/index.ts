import { gql } from "@apollo/client";
import {
	Get5ToeflPostsQuery,
	Get5ToeflPostsQueryVariables,
	GetAllPostsSlugsQuery,
	GetAllPostsSlugsQueryVariables,
	GetAllTagsQuery,
	GetAllTagsQueryVariables,
	GetPostBySlugQuery,
	GetPostBySlugQueryVariables,
	GetPostsByTagQuery,
	GetPostsByTagQueryVariables,
} from "../@types/contentfulSchema";

import { apolloClient } from "./apolloClient";

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

export const get5ToeflPosts = async () => {
	const fiveToeflPosts = gql`
		query get5ToeflPosts {
			postCollection(limit: 5, where: { tag: { name: "TOEFL" } }) {
				items {
					slug
					title
					tag {
						name
					}
					sys {
						publishedAt
					}
					previewImg {
						url
						title
					}
				}
			}
		}
	`;

	const { data } = await apolloClient.query<Get5ToeflPostsQuery, Get5ToeflPostsQueryVariables>({
		query: fiveToeflPosts,
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
