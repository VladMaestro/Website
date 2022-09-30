import { FC, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const BreadCrumbs: FC = () => {
	const router = useRouter();
	const breadCrumbs = router.asPath.split("/");

	const arr: ReactNode[] = [];
	let breadCrumbsString = "/";

	breadCrumbs.map((item, index) => {
		if (!item.length) {
			arr.push(
				<p key={index} className="breadCrumbs__item">
					<Link href={breadCrumbsString}>
						<a className="breadCrumbs__link">Home</a>
					</Link>
					<span className="breadCrumbs__slash">/</span>
				</p>
			);
		} else {
			breadCrumbsString = breadCrumbsString + `${item}/`;
			arr.push(
				<p key={index} className="breadCrumbs__item">
					<Link href={`${breadCrumbsString}`}>
						<a className="breadCrumbs__link">{item.charAt(0).toUpperCase() + item.slice(1)}</a>
					</Link>
					<span className="breadCrumbs__slash">/</span>
				</p>
			);
		}
	});

	return <div className="breadCrumbs">{arr}</div>;
};
