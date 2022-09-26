import { ApolloClient, InMemoryCache } from "@apollo/client";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT, CONTENTFUL_CD_API_KEY } = process.env;

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

export const apolloClient = new ApolloClient({
	uri: endpoint,
	headers: {
		Authorization: `Bearer ${CONTENTFUL_CD_API_KEY}`,
	},
	cache: new InMemoryCache(),
});
