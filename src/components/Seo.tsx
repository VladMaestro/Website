import Head from "next/head";
import React, { FC } from "react";

type SeoProps = {
	title?: string;
	description?: string;
	img?: string;
};

export const Seo: FC<SeoProps> = ({
	title = "Learn to speak English fluently online",
	description = "Are you looking for a way to improve your English? Vlad Shapoval is an experienced and TESOL Certified teacher who can help you to master your English!",
	img = "https://www.easyenprep.com/img/author/vlad1.jpg",
}) => {
	return (
		<Head>
			<title>Easy_EN PREP</title>
			<meta name="author" content="Vlad Shapoval" />
			<meta name="description" content={description} />
			<meta name="google-site-verification" content="3dBZxnSzCwAEzu_hdAjpSL1isvd8M0fXqVeL4T4PPXk" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.easyenprep.com/" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={img} />
			<meta name="twitter:card" content="summary_large_image" />

			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />

			<link rel="icon" href="/img/favicon/favicon.ico" />

			<meta name="theme-color" content="#ffffff" />
		</Head>
	);
};
