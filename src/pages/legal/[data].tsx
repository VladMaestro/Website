import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { NextPageWithLayout } from "../_app";
import { BlogLayout } from "../../Layouts/BlogLayout";
import { Policy, Refund, Seo, Terms } from "../../components";

const Legal: NextPageWithLayout = () => {
	const router = useRouter();

	const [currentData, setCurrentData] = useState(router.asPath.split("/")[2]);

	useEffect(() => {
		setCurrentData(router.asPath.split("/")[2]);
	}, [router]);

	return (
		<>
			<Seo />
			{currentData === "policy" ? (
				<Policy />
			) : currentData === "terms" ? (
				<Terms />
			) : currentData === "refund" ? (
				<Refund />
			) : null}
		</>
	);
};

Legal.getLayout = function getLayout(page: ReactElement) {
	return <BlogLayout>{page}</BlogLayout>;
};

export default Legal;
