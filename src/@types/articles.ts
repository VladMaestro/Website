export type SmallArticleType = {
	slug: string;
	title: string;
	smallDescription: string;
	tag: { name: string };
	sys: { publishedAt: any };
};

export type mediumArticleType = {
	slug: string;
	title: string;
	tag: {
		name: string;
	};
	sys: {
		publishedAt: any;
	};
	previewImg: {
		url: string;
		title: string;
	};
};

export type bigArticleType = {
	slug: string;
	title: string;
	smallDescription: string;
	tag: {
		name: string;
	};
	sys: {
		publishedAt: any;
	};
	previewImg: {
		url: string;
		title: string;
	};
};

export type mixArticleType = {
	slug: string;
	title: string;
	smallDescription: string;
	tag: {
		name: string;
	};
	sys: {
		publishedAt: any;
	};
	previewImg: {
		url: string;
		title: string;
	};
};

export type TextLinks = {
	entries: {
		hyperlink: Array<
			| {
					__typename?: "Post";
					title: string;
					slug: string;
					sys: {
						id: string;
					};
			  }
			| {
					__typename?: "Tag";
					sys: {
						id: string;
					};
			  }
		>;
	};
	assets: {
		block: Array<{
			__typename?: "Asset";
			title: string;
			url: string;
			sys: {
				id: string;
			};
			width: number;
			height: number;
		}>;
	};
};
