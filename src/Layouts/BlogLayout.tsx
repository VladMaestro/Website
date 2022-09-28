import { ReactNode, FC } from "react";

import { BlogFooter, BlogHeader } from "../components";

type BlogLayoutProps = {
	children: ReactNode;
};

export const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {
	return (
		<>
			<BlogHeader />
			<main>{children}</main>
			<BlogFooter />
		</>
	);
};
