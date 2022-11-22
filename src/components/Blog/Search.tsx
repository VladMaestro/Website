import { FC, useEffect, useRef } from "react";
import algoliasearch from "algoliasearch/lite";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";

const searchClient = algoliasearch(
	process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
	process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
);

export const Search: FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const search = autocomplete({
			container: containerRef.current!,
			placeholder: "Search for articles",
			getSources({ query }) {
				return [
					{
						sourceId: "products",
						getItems() {
							return getAlgoliaResults({
								searchClient,
								queries: [
									{
										indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!,
										query,
										params: {
											hitsPerPage: 10,
										},
									},
								],
							});
						},
						templates: {
							item({ item, html }) {
								return html`<div class="aa-ItemWrapper">
									<a class="link" href="/blog/article/${item.slug}">${item.title}</a>
								</div>`;
							},
							noResults() {
								return "No articles for this query.";
							},
						},
					},
				];
			},
		});

		return () => {
			search.destroy();
		};
	}, []);

	return (
		<div className="container">
			<div ref={containerRef}></div>
		</div>
	);
};
