import React from "react";
import Image from "next/image";
import Link from "next/link";

export const BlogFooter: React.FC = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__container">
					<div className="footer__part">
						<Image src="/img/logo/easyen.png" height="40px" width="111" className="header__logo" alt="easyen" />
						<nav className="navigation">
							<ul className="navigation__list">
								<li className="navigation__item">
									<Link href="/">
										<a className="navigation__link">Home</a>
									</Link>
								</li>
								<li className="navigation__item">
									<Link href="/blog">
										<a className="navigation__link">Blog</a>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="contacts">
						<a
							href="mailto:vlad.shapoval.teacher@gmail.com"
							target="_blank"
							className="contacts__email button button--light"
							rel="noreferrer"
						>
							Send Email
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};