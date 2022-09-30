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
