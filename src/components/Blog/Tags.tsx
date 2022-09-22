import React from "react";
import Link from "next/link";

export const Tags: React.FC = () => {
	return (
		<section className="tags" aria-labelledby="tagsSectionTitle">
			<div className="container">
				<h2 className="sr-only" id="tagsSectionTitle">
					All Tags
				</h2>
				<div className="tags__container">
					<Link href="/blog/grammer">
						<a className="tags__link">Grammar</a>
					</Link>
					<Link href="/blog/toefl">
						<a className="tags__link">TOEFL</a>
					</Link>
					<Link href="#">
						<a className="tags__link">Grammar</a>
					</Link>
					<Link href="#">
						<a className="tags__link">TOEFL</a>
					</Link>
					<Link href="#">
						<a className="tags__link">Grammar</a>
					</Link>
					<Link href="#">
						<a className="tags__link">TOEFL</a>
					</Link>
					<Link href="#">
						<a className="tags__link">Grammar</a>
					</Link>
					<Link href="#">
						<a className="tags__link">TOEFL</a>
					</Link>
					<Link href="#">
						<a className="tags__link">Grammar</a>
					</Link>
					<Link href="#">
						<a className="tags__link">TOEFL</a>
					</Link>
					<Link href="#">
						<a className="tags__link">Grammar</a>
					</Link>
					<Link href="#">
						<a className="tags__link">TOEFL</a>
					</Link>
				</div>
			</div>
		</section>
	);
};
