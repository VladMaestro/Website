import React from "react";

import { BlogFooter, BlogHeader } from "../components";

type BlogLayoutProps = {
	children: React.ReactNode;
};

export const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
	return (
		<>
			<BlogHeader />
			<main>{children}</main>
			<BlogFooter />
		</>
	);
};
