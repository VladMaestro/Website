document.addEventListener('DOMContentLoaded', () => {
	const servicesData = {
		trial: {
			title: "Trial Lesson 🎯",
			text: "Do you want to learn how I can help you with improving your English?:) Just book a trial class with me and we will discuss your learning opportunities!;)",
			price: ["$5"]
		},
		chat: {
			title: "Chit-Chat Class 💬",
			text: "Do you want to practice your Oral English? Just book a lesson and we will speak during our class as much as you want about any topics you like!",
			price: ["$11 USD / 30 min","$12 USD / 45 min","$14 USD / 60 min","$18 USD / 90 min"]
		},
		conversational: {
			title: "Conversational English 😎",
			text: "Do you want to speak fluently with foreigners or native speakers? Then this course is right for you! You are going to practice different topics by learning new words, having conversations about them, and completing useful exercises.",
			price: ["$14 USD / 30 min","$15 USD / 45 min","$16 USD / 60 min","$18 USD / 90 min"]
		},
		general: {
			title: "General English 🇺🇲",
			text: "Do you want to improve your General English? Grammar, or listening? Or, maybe, reading and pronunciation? Book a lesson with me, and I customize it for you! We will focus on areas that you want to master the most!",
			price: ["$14 USD / 30 min","$15 USD / 45 min","$16 USD / 60 min","$18 USD / 90 min"]
		},
		busines: {
			title: "Business English/ Interview Preparation 💼",
			text: "Are you looking for a course to improve your Business English? Or, maybe, you need to prepare for your job or school interview quickly. Perhaps, you want to learn how to write business emails so they would look professional. Or you want to have a good presentation for the next meeting. This course will help you with this! Book a trial lesson and I will tell you what we can do to improve your Business English or prepare you well for your job interview!;)",
			price: ["$14 USD / 30 min","$15 USD / 45 min","$16 USD / 60 min","$18 USD / 90 min"]
		},
		exam: {
			title: "TOEFL/ Duolingo/ IELTS/ English Exam Preparation 📚",
			text: "Do you need to prepare quickly for your TOEFL/ Duolingo/ English Exam? Or do you want to improve specific skills for the TOEFL / Duolingo/ English Exam to get a better score? Then I am here for you! Book a trial class and you will learn what we will do together during classes so you will get the maximum score!",
			price: ["$14 USD / 30 min","$15 USD / 45 min","$16 USD / 60 min","$18 USD / 90 min"]
		}
	}

	const calendarCon = document.querySelector(".calendar__container");
	const setmoreIframe = `<iframe class="calendar__frame" src="https://easyenprep.setmore.com/vladyslav-shapoval" scrolling="yes" width="100%" height="100%" frameborder="0"></iframe>`;	
	calendarCon.innerHTML = setmoreIframe;

	const enrollButton = document.querySelectorAll(".enroll");
	const calendarSection = document.querySelector(".calendar");
	
	function scrollToCalendar() {
		scrollTo({
			top: calendarSection.offsetTop,
			left: 0,
			behavior: "smooth"
		});
	}
	
	for (let i = 0; i < enrollButton.length; i++) {
		enrollButton[i].addEventListener("click", scrollToCalendar);
	}
	
	const modalDiv = document.querySelector(".modal");
	const modalContent = document.querySelector(".modal__content");
	const modalTitle = document.querySelector(".modal__title");
	const modalText = document.querySelector(".modal__text");
	const modalList = document.querySelector(".modal__list");
	const modalClose = document.querySelector(".modal__close");
	
	const servicesCon = document.querySelector(".services__container");

	function createModalItem(text, parent) {
		const li = document.createElement("li");
		li.classList.add("modal__item");
		li.textContent = text;
	
		parent.appendChild(li);
	}

	function openModal(event) {
		const target = event.target;
	
		if (target.classList.contains("button")) {
			const serviceName = target.dataset.service;
			const serviceData = servicesData[serviceName];
	
			modalTitle.textContent = serviceData.title;
			modalText.textContent = serviceData.text;
	
			modalList.textContent = "";
	
			for (let i = 0; i < serviceData.price.length; i++) {
				createModalItem(serviceData.price[i], modalList);
			}
	
			modalDiv.classList.add("modal--visible");
			modalContent.classList.add("modal__content--visivle");
		}
	}
	
	function closeModal(event) {
		const target = event.target;
	
		if (target.classList.contains("modal__close") || target.classList.contains("modal")) {
			modalDiv.classList.remove("modal--visible");
			modalContent.classList.remove("modal__content--visivle");
		}
	}
	
	servicesCon.addEventListener("click", openModal);
	modalDiv.addEventListener("click", closeModal);
	modalClose.addEventListener("click", closeModal);
	
	new Swiper(".slider", {
		slidesPerView: 3,
		spaceBetween: 30,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			700: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}
	});
});

