import { gql } from "@apollo/client";

export const smallArticleFragment = gql`
	fragment smallArticle on Post {
		slug
		title
		smallDescription
		tag {
			name
		}
		sys {
			publishedAt
		}
	}
`;

export const mixArticleFragment = gql`
	fragment mixArticle on Post {
		slug
		title
		smallDescription
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
`;
