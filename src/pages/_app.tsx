import type { ReactElement, ReactNode } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "../assets/css/index.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return getLayout(
		<>
			<Head>
				<title>Easy_EN PREP</title>
				<meta name="author" content="Vlad Shapoval" />
				<meta
					name="description"
					content="Are you looking for a way to improve your English? Vlad Shapoval is an experienced and TESOL Certified teacher who can help you to master your English!"
				/>
				<meta name="google-site-verification" content="3dBZxnSzCwAEzu_hdAjpSL1isvd8M0fXqVeL4T4PPXk" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.easyenprep.com/" />
				<meta property="og:title" content="Learn to speak English fluently online" />
				<meta
					property="og:description"
					content="Are you looking for a way to improve your English? Vlad Shapoval is an experienced and TESOL Certified teacher who can help you to master your English!"
				/>
				<meta property="og:image" content="https://www.easyenprep.com/img/author/vlad1.jpg" />
				<meta name="twitter:card" content="summary_large_image" />

				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />

				<link rel="icon" href="/img/favicon/favicon.ico" />

				<meta name="theme-color" content="#ffffff" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
