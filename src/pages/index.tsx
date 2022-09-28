import { useRef, useState, useEffect, MouseEvent, ChangeEvent } from "react";
import Image from "next/image";
import type { NextPage } from "next";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Modal } from "../components";

import { servicesData, translation } from "../utils/translation";
import { serviceDataType } from "../@types/servicesData";
import Link from "next/link";

const swiperOptions = {
	spaceBetween: 30,
	slidesPerView: 3,
	navigation: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		700: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
};

const Home: NextPage = () => {
	const [modalIsOpen, setModal] = useState(false);
	const [modalData, setModalData] = useState<serviceDataType>({
		title: "",
		text: "",
		price: [""],
	});
	const [languageSelect, setLanguageSelect] = useState("en");
	const [calendar, setCalendar] = useState(false);

	const calendarSectionRef = useRef<HTMLElement>(null);
	const languageSelectRef = useRef<HTMLSelectElement>(null);

	const scrollToCalendar = () => {
		scrollTo({
			top: calendarSectionRef.current?.offsetTop,
			left: 0,
			behavior: "smooth",
		});
	};

	const openModal = (event: MouseEvent<HTMLButtonElement>) => {
		const serviceName = event.currentTarget.getAttribute("data-service");

		if (serviceName) {
			const serviceData = servicesData[serviceName][languageSelect];
			setModalData(serviceData);
			setModal(true);
		}
	};

	const closeModal = () => {
		setModal(false);
	};

	const languageSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		localStorage.setItem("language", value);
		setLanguageSelect(value);
	};

	useEffect(() => {
		const languageType = localStorage.getItem("language") || "";
		if (languageType) {
			setLanguageSelect(languageType);
		} else {
			localStorage.setItem("language", "en");
			setLanguageSelect("en");
		}

		const obserOptions = {
			root: null,
			rootMargin: "0px",
			threshols: 0.1,
		};

		const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setCalendar(true);
					observer.unobserve(entry.target);
				}
			});
		};

		const calendarHeader = calendarSectionRef.current;

		const observer = new IntersectionObserver(observerCallback, obserOptions);
		if (calendarHeader) observer.observe(calendarHeader);

		return () => {
			if (calendarHeader) observer.unobserve(calendarHeader);
		};
	}, []);

	return (
		<>
			<Modal isOpen={modalIsOpen} closeModal={closeModal} data={modalData} />

			<section className="preview section">
				<div className="container">
					<header className="header">
						<div className="header__container">
							<Image src="/img/logo/easyen.png" height="50px" width="140" className="header__logo" alt="easyen" />
							<nav className="navigation">
								<ul className="navigation__list">
									<li className="navigation__item">
										<a href="#about" className="navigation__link lng-linkAbout">
											{translation["linkAbout"][languageSelect]}
										</a>
									</li>
									<li className="navigation__item">
										<a href="#services" className="navigation__link lng-linkServices">
											{translation["linkServices"][languageSelect]}
										</a>
									</li>
									<li className="navigation__item">
										<a href="#reviews" className="navigation__link lng-linkReviews">
											{translation["linkReviews"][languageSelect]}
										</a>
									</li>
									<li className="navigation__item">
										<a href="#calendar" className="navigation__link lng-linkCalendar">
											{translation["linkCalendar"][languageSelect]}
										</a>
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
							<select
								ref={languageSelectRef}
								name="language"
								id="language"
								className="select"
								value={languageSelect}
								onChange={languageSelectHandler}
							>
								<option value="en">EN</option>
								<option value="es">ES</option>
								<option value="ua">UA</option>
								<option value="ru">RU</option>
							</select>
							<a
								href="mailto:vlad.shapoval.teacher@gmail.com"
								target="_blank"
								className="contacts__email button button--light lng-emailBtn"
								rel="noreferrer"
							>
								{translation["emailBtn"][languageSelect]}
							</a>
						</div>
					</header>
					<div className="preview__hero">
						<div className="preview__info">
							<h1 className="preview__title lng-previewTitle">{translation["previewTitle"][languageSelect]}</h1>
							<p className="preview__text lng-previewText1">{translation["previewText1"][languageSelect]}</p>
							<p className="preview__text lng-previewText2">{translation["previewText2"][languageSelect]}</p>
							<button type="button" onClick={scrollToCalendar} className="button preview__button lng-previewBtn">
								{translation["previewBtn"][languageSelect]}
							</button>
						</div>
						<div className="preview__picture">
							<Image
								className="preview__img"
								src="/img/author/vlad1.jpg"
								layout="fill"
								objectFit="cover"
								alt="Vlad - English Teacher"
							/>
						</div>
					</div>
					<div className="benefits">
						<div className="benefit">
							<span className="benefit__emoji">✅</span>
							<p className="benefit__text lng-benefit1">
								<span className="accent">{translation["benefit1-1"][languageSelect]}</span> <br />{" "}
								{translation["benefit1-2"][languageSelect]}
							</p>
						</div>
						<div className="benefit">
							<span className="benefit__emoji">🔊</span>
							<p className="benefit__text lng-benefit2">
								<span className="accent">{translation["benefit2-1"][languageSelect]}</span>{" "}
								{translation["benefit2-2"][languageSelect]} <br /> {translation["benefit2-3"][languageSelect]}
							</p>
						</div>
						<div className="benefit">
							<span className="benefit__emoji">💰</span>
							<p className="benefit__text lng-benefit3">
								<span className="accent">{translation["benefit3-1"][languageSelect]}</span> <br />{" "}
								{translation["benefit3-2"][languageSelect]}
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="lesson section">
				<div className="container">
					<h2 className="section-title lng-lessonTitle">{translation["lessonTitle"][languageSelect]}</h2>
					<div className="lesson__container">
						<div className="lesson__wrap">
							<Image
								src="/img/lesson/lesson.jpg"
								alt="Online lesson"
								layout="fill"
								objectFit="cover"
								className="lesson__img"
							/>
						</div>
						<div className="lesson__info">
							<p className="lesson__text lng-lessonText">{translation["lessonText"][languageSelect]}</p>
							<ul className="lesson__list">
								<li className="lesson__item lng-lessonItem1">{translation["lessonItem1"][languageSelect]}</li>
								<li className="lesson__item lng-lessonItem2">{translation["lessonItem2"][languageSelect]}</li>
								<li className="lesson__item lng-lessonItem3">{translation["lessonItem3"][languageSelect]}</li>
								<li className="lesson__item lng-lessonItem4">{translation["lessonItem4"][languageSelect]}</li>
								<li className="lesson__item lng-lessonItem5">{translation["lessonItem5"][languageSelect]}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="extra section">
				<div className="container">
					<h2 className="section-title lng-extraTitle0">{translation["extraTitle0"][languageSelect]}</h2>
					<div className="extra__container">
						<div className="extra__item">
							<h3 className="extra__title lng-extraTitle1">{translation["extraTitle1"][languageSelect]}</h3>
							<p className="extra__text lng-extraText1">{translation["extraText1"][languageSelect]}</p>
							<span className="extra__emoji">🤟</span>
						</div>
						<div className="extra__item">
							<h3 className="extra__title lng-extraTitle2">{translation["extraTitle2"][languageSelect]}</h3>
							<p className="extra__text lng-extraText2">{translation["extraText2"][languageSelect]}</p>
							<span className="extra__emoji">💣</span>
						</div>
						<div className="extra__item">
							<h3 className="extra__title lng-extraTitle3">{translation["extraTitle3"][languageSelect]}</h3>
							<p className="extra__text lng-extraText3">{translation["extraText3"][languageSelect]}</p>
							<span className="extra__emoji">🤗</span>
						</div>
						<div className="extra__item">
							<h3 className="extra__title lng-extraTitle4">{translation["extraTitle4"][languageSelect]}</h3>
							<p className="extra__text lng-extraText4">{translation["extraText4"][languageSelect]}</p>
							<span className="extra__emoji">🎓</span>
						</div>
						<div className="extra__item">
							<h3 className="extra__title lng-extraTitle5">{translation["extraTitle5"][languageSelect]}</h3>
							<p className="extra__text lng-extraText5">{translation["extraText5"][languageSelect]}</p>
							<span className="extra__emoji">🔥</span>
						</div>
						<div className="extra__item">
							<h3 className="extra__title lng-extraTitle6">{translation["extraTitle6"][languageSelect]}</h3>
							<p className="extra__text lng-extraText6">{translation["extraText6"][languageSelect]}</p>
							<span className="extra__emoji">💸</span>
						</div>
					</div>
				</div>
			</section>

			<section className="author section" id="about">
				<div className="container">
					<div className="author__hero">
						<div className="author__picture">
							<Image
								src="/img/author/vlad2.jpg"
								alt="Vlad - English Teacher"
								layout="fill"
								objectFit="cover"
								className="author__img"
							/>
						</div>
						<div className="author__info">
							<h3 className="author__title lng-authorTitle">{translation["authorTitle"][languageSelect]}</h3>
							<p className="author__text lng-authorText1">
								{translation["authorText1-1"][languageSelect]}{" "}
								<span className="accent">{translation["authorText1-2"][languageSelect]}</span>{" "}
								{translation["authorText1-3"][languageSelect]}
							</p>
							<p className="author__text lng-authorText2">
								{translation["authorText2-1"][languageSelect]}{" "}
								<span className="accent">{translation["authorText2-2"][languageSelect]}</span>{" "}
								{translation["authorText2-3"][languageSelect]}{" "}
								<span className="accent">{translation["authorText2-4"][languageSelect]}</span>{" "}
								{translation["authorText2-5"][languageSelect]}
							</p>
							<p className="author__text lng-authorText3">
								{translation["authorText3-1"][languageSelect]}{" "}
								<span className="accent">{translation["authorText3-2"][languageSelect]}</span>{" "}
								{translation["authorText3-3"][languageSelect]}{" "}
								<span className="accent">{translation["authorText3-4"][languageSelect]}</span>{" "}
								{translation["authorText3-5"][languageSelect]}
							</p>
							<button type="button" onClick={scrollToCalendar} className="button button--full lng-authorBtn">
								{translation["authorBtn"][languageSelect]}
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="services section" id="services">
				<div className="container">
					<h2 className="section-title lng-servicesTitle">{translation["servicesTitle"][languageSelect]}</h2>
					<div className="services__container">
						<div className="services__item">
							<div className="services__header">
								<h3 className="services__title lng-trialTitle">{translation["trialTitle"][languageSelect]}</h3>
								<p className="services__time lng-trialTime">{translation["trialTime"][languageSelect]}</p>
								<p className="services__lessons lng-servicesLessons">
									{translation["servicesLessons"][languageSelect]}
								</p>
							</div>
							<div className="services__info">
								<ul className="services__list">
									<li className="services__point lng-trialItem1">{translation["trialItem1"][languageSelect]}</li>
									<li className="services__point lng-trialItem2">{translation["trialItem2"][languageSelect]}</li>
									<li className="services__point lng-trialItem3">{translation["trialItem3"][languageSelect]}</li>
									<li className="services__point lng-trialItem4">{translation["trialItem4"][languageSelect]}</li>
									<li className="services__point lng-trialItem5">{translation["trialItem5"][languageSelect]}</li>
								</ul>
								<p className="services__price accent lng-trialPrice">{translation["trialPrice"][languageSelect]}</p>
								<button
									type="button"
									onClick={openModal}
									className="button button--full lng-servicesBtn"
									data-service="trial"
								>
									{translation["servicesBtn"][languageSelect]}
								</button>
							</div>
						</div>
						<div className="services__item">
							<div className="services__header">
								<h3 className="services__title lng-chatTitle">{translation["chatTitle"][languageSelect]}</h3>
								<p className="services__time lng-servicesTime">{translation["servicesTime"][languageSelect]}</p>
								<p className="services__lessons lng-servicesLessons">
									{translation["servicesLessons"][languageSelect]}
								</p>
							</div>
							<div className="services__info">
								<ul className="services__list">
									<li className="services__point lng-chatItem1">{translation["chatItem1"][languageSelect]}</li>
									<li className="services__point lng-chatItem2">{translation["chatItem2"][languageSelect]}</li>
									<li className="services__point lng-chatItem3">{translation["chatItem3"][languageSelect]}</li>
									<li className="services__point lng-chatItem4">{translation["chatItem4"][languageSelect]}</li>
									<li className="services__point lng-chatItem5">{translation["chatItem5"][languageSelect]}</li>
								</ul>
								<p className="services__price accent lng-chatPrice">{translation["chatPrice"][languageSelect]}</p>
								<button
									type="button"
									onClick={openModal}
									className="button button--full lng-servicesBtn"
									data-service="chat"
								>
									{translation["servicesBtn"][languageSelect]}
								</button>
							</div>
						</div>
						<div className="services__item">
							<div className="services__header">
								<h3 className="services__title lng-convTitle">{translation["convTitle"][languageSelect]}</h3>
								<p className="services__time lng-servicesTime">{translation["servicesTime"][languageSelect]}</p>
								<p className="services__lessons lng-servicesLessons">
									{translation["servicesLessons"][languageSelect]}
								</p>
							</div>
							<div className="services__info">
								<ul className="services__list">
									<li className="services__point lng-convItem1">{translation["convItem1"][languageSelect]}</li>
									<li className="services__point lng-convItem2">{translation["convItem2"][languageSelect]}</li>
									<li className="services__point lng-convItem3">{translation["convItem3"][languageSelect]}</li>
									<li className="services__point lng-convItem4">{translation["convItem4"][languageSelect]}</li>
									<li className="services__point lng-convItem5">{translation["convItem5"][languageSelect]}</li>
								</ul>
								<p className="services__price accent lng-servicesPrice">
									{translation["servicesPrice"][languageSelect]}
								</p>
								<button
									type="button"
									onClick={openModal}
									className="button button--full lng-servicesBtn"
									data-service="conversational"
								>
									{translation["servicesBtn"][languageSelect]}
								</button>
							</div>
						</div>
						<div className="services__item">
							<div className="services__header">
								<h3 className="services__title lng-genTitle">{translation["genTitle"][languageSelect]}</h3>
								<p className="services__time lng-servicesTime">{translation["servicesTime"][languageSelect]}</p>
								<p className="services__lessons lng-servicesLessons">
									{translation["servicesLessons"][languageSelect]}
								</p>
							</div>
							<div className="services__info">
								<ul className="services__list">
									<li className="services__point lng-genItem1">{translation["genItem1"][languageSelect]}</li>
									<li className="services__point lng-genItem2">{translation["genItem2"][languageSelect]}</li>
									<li className="services__point lng-genItem3">{translation["genItem3"][languageSelect]}</li>
									<li className="services__point lng-genItem4">{translation["genItem4"][languageSelect]}</li>
									<li className="services__point lng-genItem5">{translation["genItem5"][languageSelect]}</li>
								</ul>
								<p className="services__price accent lng-servicesPrice">
									{translation["servicesPrice"][languageSelect]}
								</p>
								<button
									type="button"
									onClick={openModal}
									className="button button--full lng-servicesBtn"
									data-service="general"
								>
									{translation["servicesBtn"][languageSelect]}
								</button>
							</div>
						</div>
						<div className="services__item">
							<div className="services__header">
								<h3 className="services__title lng-busTitle">{translation["busTitle"][languageSelect]}</h3>
								<p className="services__time lng-servicesTime">{translation["servicesTime"][languageSelect]}</p>
								<p className="services__lessons lng-servicesLessons">
									{translation["servicesLessons"][languageSelect]}
								</p>
							</div>
							<div className="services__info">
								<ul className="services__list">
									<li className="services__point lng-busItem1">{translation["busItem1"][languageSelect]}</li>
									<li className="services__point lng-busItem2">{translation["busItem2"][languageSelect]}</li>
									<li className="services__point lng-busItem3">{translation["busItem3"][languageSelect]}</li>
									<li className="services__point lng-busItem4">{translation["busItem4"][languageSelect]}</li>
									<li className="services__point lng-busItem5">{translation["busItem5"][languageSelect]}</li>
								</ul>
								<p className="services__price accent lng-servicesPrice">
									{translation["servicesPrice"][languageSelect]}
								</p>
								<button
									type="button"
									onClick={openModal}
									className="button button--full lng-servicesBtn"
									data-service="busines"
								>
									{translation["servicesBtn"][languageSelect]}
								</button>
							</div>
						</div>
						<div className="services__item">
							<div className="services__header">
								<h3 className="services__title lng-examTitle">{translation["examTitle"][languageSelect]}</h3>
								<p className="services__time lng-servicesTime">{translation["servicesTime"][languageSelect]}</p>
								<p className="services__lessons lng-servicesLessons">
									{translation["servicesLessons"][languageSelect]}
								</p>
							</div>
							<div className="services__info">
								<ul className="services__list">
									<li className="services__point lng-examItem1">{translation["examItem1"][languageSelect]}</li>
									<li className="services__point lng-examItem2">{translation["examItem2"][languageSelect]}</li>
									<li className="services__point lng-examItem3">{translation["examItem3"][languageSelect]}</li>
									<li className="services__point lng-examItem4">{translation["examItem4"][languageSelect]}</li>
									<li className="services__point lng-examItem5">{translation["examItem5"][languageSelect]}</li>
								</ul>
								<p className="services__price accent lng-servicesPrice">
									{translation["servicesPrice"][languageSelect]}
								</p>
								<button
									type="button"
									onClick={openModal}
									className="button button--full lng-servicesBtn"
									data-service="exam"
								>
									{translation["servicesBtn"][languageSelect]}
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="reviews section" id="reviews">
				<div className="container">
					<h2 className="section-title lng-reviewTitle">{translation["reviewTitle"][languageSelect]}</h2>
					<div className="reviews__container">
						<Swiper modules={[Navigation]} {...swiperOptions}>
							<SwiperSlide className="swiper-slide slider__item">
								<header className="slider__header">
									<Image
										src="/img/reviews/4.jpg"
										alt="Photo of Oleg"
										className="slider__author"
										width="80"
										height="80"
									/>
									<div className="slider__con">
										<h3 className="slider__name">Oleg</h3>
										<p className="slider__lessons">Lessons: 14</p>
									</div>
								</header>
								<p className="slider__text">
									I&apos;m studying conversational topics with Vladyslav. He gives me the opportunity to choose the
									topic that I like the most, describes unknown words in English, which develops my level of English,
									and gives me homework. I am satisfied with the program and the teacher.
								</p>
								<footer className="slider__footer">
									<div className="slider__date">Oct 22, 2021</div>
									<Image
										src="/img/flags/Ukraine.png"
										alt="Ukraine flag"
										className="slider__flag"
										title="Ukraine"
										width="32"
										height="32"
									/>
								</footer>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide slider__item">
								<header className="slider__header">
									<Image
										src="/img/reviews/5.jpg"
										alt="Photo of Haruka Makino"
										className="slider__author"
										width="80"
										height="80"
									/>
									<div className="slider__con">
										<h3 className="slider__name">Haruka Makino</h3>
										<p className="slider__lessons">Lessons: 17</p>
									</div>
								</header>
								<p className="slider__text">
									We practiced teh writing task in Duolingo. He gave some advice, so I could understand what I was doing
									wrong. Also, he provided me word study tips(Quizlet) so I could study outside of lesson time.
								</p>
								<footer className="slider__footer">
									<div className="slider__date">Dec 15, 2021</div>
									<Image
										src="/img/flags/Japan.png"
										alt="Japan flag"
										className="slider__flag"
										title="Japan"
										width="32"
										height="32"
									/>
								</footer>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide slider__item">
								<header className="slider__header">
									<Image
										src="/img/reviews/7.jpg"
										alt="Photo of Анна"
										className="slider__author"
										width="80"
										height="80"
									/>
									<div className="slider__con">
										<h3 className="slider__name">Анна</h3>
										<p className="slider__lessons">Lessons: 23</p>
									</div>
								</header>
								<p className="slider__text">
									Vladyslav is very competent, patient and dedicated tutor, who helps you improve your English. He is
									very friendly and make you feel comfortable.Strongly recommend him as an English tutor.
								</p>
								<footer className="slider__footer">
									<div className="slider__date">November 29, 2021</div>
									<Image
										src="/img/flags/Ukraine.png"
										alt="Ukraine flag"
										className="slider__flag"
										title="Ukraine"
										width="32"
										height="32"
									/>
								</footer>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide slider__item">
								<header className="slider__header">
									<Image
										src="/img/reviews/8.jpg"
										alt="Photo of Борис"
										className="slider__author"
										width="80"
										height="80"
									/>
									<div className="slider__con">
										<h3 className="slider__name">Борис</h3>
										<p className="slider__lessons">Lessons: 18</p>
									</div>
								</header>
								<p className="slider__text">
									Hello, everyone! I&apos;ve been working with Vlad for a little while now, but I can already feel that
									I am starting to speak better. My main goal is to speak and communicate well in English, and
									that&apos;s all we do. Speaking. We talk a lot. That&apos;s great! And the lessons are structured in
									such a way that you don&apos;t want to finish them. The necessary rules are presented in a simple and
									easy to understand way! I recommend Vlad as a cool specialist and a great person! Thank you!
								</p>
								<footer className="slider__footer">
									<div className="slider__date">February 9, 2022</div>
									<Image
										src="/img/flags/Ukraine.png"
										alt="Ukraine flag"
										className="slider__flag"
										title="Ukraine"
										width="32"
										height="32"
									/>
								</footer>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide slider__item">
								<header className="slider__header">
									<Image
										src="/img/reviews/6.jpg"
										alt="Photo of Артём"
										className="slider__author"
										width="80"
										height="80"
									/>
									<div className="slider__con">
										<h3 className="slider__name">Артём</h3>
										<p className="slider__lessons">Lessons: 26</p>
									</div>
								</header>
								<p className="slider__text">
									Vladyslav is a very good teacher with excellent English proficiency. Explains grammar intelligibly
									along with practical and homework assignments. It is easy and fun to have conversations with him on
									any topic. I can recommend Vladislav to everyone!
								</p>
								<footer className="slider__footer">
									<div className="slider__date">February 7, 2022</div>
									<Image
										src="/img/flags/Ukraine.png"
										alt="Ukraine flag"
										className="slider__flag"
										title="Ukraine"
										width="32"
										height="32"
									/>
								</footer>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide slider__item">
								<header className="slider__header">
									<Image
										src="/img/reviews/9.jpg"
										alt="Photo of Alla"
										className="slider__author"
										width="80"
										height="80"
									/>
									<div className="slider__con">
										<h3 className="slider__name">Alla</h3>
										<p className="slider__lessons">Lessons: 15</p>
									</div>
								</header>
								<p className="slider__text">
									I was looking for a teacher who will help me to improve my speaking skills. I wasn&apos;t disappointed
									to choose Vlad. He is not only a good teacher but also a great collocutor and a friend. Lesson time is
									flying very fast. I strongly recommend Vlad as a guide to the endless World of English language!
								</p>
								<footer className="slider__footer">
									<div className="slider__date">Feb 19, 2022</div>
									<Image
										src="/img/flags/Ukraine.png"
										alt="Ukraine flag"
										className="slider__flag"
										title="Ukraine"
										width="32"
										height="32"
									/>
								</footer>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide slider__item">
								<header className="slider__header">
									<Image
										src="/img/reviews/10.jpg"
										alt="Photo of Tu"
										className="slider__author"
										width="80"
										height="80"
									/>
									<div className="slider__con">
										<h3 className="slider__name">Tu</h3>
										<p className="slider__lessons">Lessons: 10</p>
									</div>
								</header>
								<p className="slider__text">
									It was my pleasure to meet teacher Vlad. I think he is a great teacher. He explained everything
									clearly, and I don&apos;t feel pressured to talk with him. He uses his own books and prepares
									different contents for every one of his students which I appreciate and am interested in. I can&apos;t
									wait for his next class, see you soon ;)
								</p>
								<footer className="slider__footer">
									<div className="slider__date">Jul 20, 2021</div>
									<Image
										src="/img/flags/Taiwan.png"
										alt="Taiwan flag"
										className="slider__flag"
										title="Taiwan"
										width="32"
										height="32"
									/>
								</footer>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide slider__item">
								<header className="slider__header">
									<Image
										src="/img/reviews/11.jpg"
										alt="Photo of Adam Goszka"
										className="slider__author"
										width="80"
										height="80"
									/>
									<div className="slider__con">
										<h3 className="slider__name">Adam Goszka</h3>
										<p className="slider__lessons">Lessons: 19</p>
									</div>
								</header>
								<p className="slider__text">
									Vlad is a very patient and positive person. He uses very good educational materials.
								</p>
								<footer className="slider__footer">
									<div className="slider__date">Aug 23, 2021</div>
									<Image
										src="/img/flags/Poland.png"
										alt="Poland flag"
										className="slider__flag"
										title="Poland"
										width="32"
										height="32"
									/>
								</footer>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide slider__item">
								<header className="slider__header">
									<Image
										src="/img/reviews/2.jpg"
										alt="Photo of Daria"
										className="slider__author"
										width="80"
										height="80"
									/>
									<div className="slider__con">
										<h3 className="slider__name">Daria</h3>
										<p className="slider__lessons">Lessons: 11</p>
									</div>
								</header>
								<p className="slider__text">
									Lessons with Vlad helped me to pass the Duolingo test and got an overall score of 125. During our
									lessons Vlad provides tips, useful information and practice exercises. Thank you for your teaching
									method, it really works.
								</p>
								<footer className="slider__footer">
									<div className="slider__date">Nov 12, 2021</div>
									<Image
										src="/img/flags/Russia.png"
										alt="Russia flag"
										className="slider__flag"
										title="Russia"
										width="32"
										height="32"
									/>
								</footer>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide slider__item">
								<header className="slider__header">
									<Image
										src="/img/reviews/3.jpg"
										alt="Photo of Stephanie Cheah"
										className="slider__author"
										width="80"
										height="80"
									/>
									<div className="slider__con">
										<h3 className="slider__name">Stephanie Cheah</h3>
										<p className="slider__lessons">Lessons: 31</p>
									</div>
								</header>
								<p className="slider__text">
									第一堂正式课，谢谢老师提供的课后作业，分别是写日记和今天教材的课后作业，也要尝试用教材中的生词来造句。我认为非常有助于提升日后的写作能力。课堂中也会询问我关于教材上的问题然后讨论，让我练习用英语思维去回应，课后也会告诉我犯了什么语法错误。非常期待下堂课，谢谢老师😊
								</p>
								<footer className="slider__footer">
									<div className="slider__date">Apr 22, 2021</div>
									<Image
										src="/img/flags/Malaysia.png"
										alt="Malaysia flag"
										className="slider__flag"
										title="Malaysia"
										width="32"
										height="32"
									/>
								</footer>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide slider__item">
								<header className="slider__header">
									<Image
										src="/img/reviews/12.jpg"
										alt="Photo of Christine Wang"
										className="slider__author"
										width="80"
										height="80"
									/>
									<div className="slider__con">
										<h3 className="slider__name">Christine Wang</h3>
										<p className="slider__lessons">Lessons: 20</p>
									</div>
								</header>
								<p className="slider__text">課程有收穫、氣氛輕鬆，不怕開口說話!</p>
								<footer className="slider__footer">
									<div className="slider__date">Jul 7, 2021</div>
									<Image
										src="/img/flags/Taiwan.png"
										alt="Taiwan flag"
										className="slider__flag"
										title="Taiwan"
										width="32"
										height="32"
									/>
								</footer>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide slider__item">
								<header className="slider__header">
									<Image
										src="/img/reviews/1.jpg"
										alt="Photo of Anatolii"
										className="slider__author"
										width="80"
										height="80"
									/>
									<div className="slider__con">
										<h3 className="slider__name">Anatoliio</h3>
										<p className="slider__lessons">Lessons: 11</p>
									</div>
								</header>
								<p className="slider__text">
									Чудовий викладач. Вміло володіє мовою. Зрозуміло та доступно пояснює граматичні тонкощі. Завжди
									відгукується, коли звертаєшся за допомогою. Рекомендую.
								</p>
								<footer className="slider__footer">
									<div className="slider__date">Jan 10, 2022</div>
									<Image
										src="/img/flags/Ukraine.png"
										alt="Ukraine flag"
										className="slider__flag"
										title="Ukraine"
										width="32"
										height="32"
									/>
								</footer>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>

			<section ref={calendarSectionRef} className="section calendar" id="calendar">
				<div className="container">
					<h2 className="section-title lng-calendarTitle">{translation["calendarTitle"][languageSelect]}</h2>
					<div className="calendar__container">
						{calendar && (
							<iframe
								className="calendar__frame"
								src="https://easyenprep.setmore.com/vladyslav-shapoval"
								loading="lazy"
								scrolling="yes"
								width="100%"
								height="100%"
								frameBorder="0"
							></iframe>
						)}
					</div>
				</div>
			</section>

			<footer className="footer">
				<div className="container">
					<div className="footer__container">
						<div className="footer__part">
							<Image src="/img/logo/easyen.png" height="40px" width="111" className="header__logo" alt="easyen" />
							<nav className="navigation">
								<ul className="navigation__list">
									<li className="navigation__item">
										<a href="#about" className="navigation__link lng-linkAbout">
											{translation["linkAbout"][languageSelect]}
										</a>
									</li>
									<li className="navigation__item">
										<a href="#services" className="navigation__link lng-linkServices">
											{translation["linkServices"][languageSelect]}
										</a>
									</li>
									<li className="navigation__item">
										<a href="#reviews" className="navigation__link lng-linkReviews">
											{translation["linkReviews"][languageSelect]}
										</a>
									</li>
									<li className="navigation__item">
										<a href="#calendar" className="navigation__link lng-linkCalendar">
											{translation["linkCalendar"][languageSelect]}
										</a>
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
								className="contacts__email button button--light lng-emailBtn"
								rel="noreferrer"
							>
								{translation["emailBtn"][languageSelect]}
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Home;
