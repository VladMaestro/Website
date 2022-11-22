import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const BlogFooter: FC = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__container">
					<div className="footer__part">
						<Image
							src="/img/logo/easyen.png"
							height="40px"
							width="111"
							className="header__logo"
							alt="easyen"
							priority
						/>
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
								<li className="navigation__item">
									<Link href="/legal/policy">
										<a className="navigation__link">Privacy Policy</a>
									</Link>
								</li>
								<li className="navigation__item">
									<Link href="/legal/terms">
										<a className="navigation__link">Terms of Use</a>
									</Link>
								</li>
								<li className="navigation__item">
									<Link href="/legal/refund">
										<a className="navigation__link">Refund policy</a>
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
				<div className="footer__policy">
					<p className="footer__text">All Trademarks are the property of their respective owners.</p>
					<p className="footer__text">
						TOEFL® and TOEFL IBT® are registered trademarks of the{" "}
						<a className="footer__link" href="https://www.ets.org/" target="_blank" rel="noreferrer noopener">
							Educational Testing Service (ETS)
						</a>
						. This site and its owners are not affiliated, approved, or endorsed by the ETS.
					</p>
					<p className="footer__text">
						DUOLINGO® and DUOLINGO ENGLISH TEST® are registered trademarks of{" "}
						<a
							className="footer__link"
							href="https://englishtest.duolingo.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							Duolingo, INC
						</a>
						. This site and its owners are not affiliated, approved, or endorsed by Duolingo, INC.
					</p>
					<p className="footer__text">
						IELTS® and IELTS Online® are registered trademarks of{" "}
						<a className="footer__link" href="https://www.cam.ac.uk/" target="_blank" rel="noreferrer noopener">
							University of Cambridge
						</a>
						, the{" "}
						<a
							className="footer__link"
							href="https://www.britishcouncil.org/"
							target="_blank"
							rel="noreferrer noopener"
						>
							British Council
						</a>
						, and{" "}
						<a className="footer__link" href="https://www.idp.com/australia/" target="_blank" rel="noreferrer noopener">
							IDP Education Australia
						</a>
						. This site and its owners are not affiliated, approved, or endorsed by the University of Cambridge ESOL,
						the British Council, and IDP Education Australia.
					</p>
					<p className="footer__text">
						While using this site, you agree to have read and accepted our terms of use, cookie, and privacy policy.
					</p>
				</div>
			</div>
		</footer>
	);
};
