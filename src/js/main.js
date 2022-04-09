document.addEventListener('DOMContentLoaded', () => {
	// Storage, Translation
	const select = document.querySelector("#language");
	const languageType =  localStorage.getItem("language");

	function changeLanguage(lng) {
		for (let key in translation) {
			const arr = document.querySelectorAll(`.lng-${key}`);

			if (arr.length > 1) {
				for (let i = 0; i < arr.length; i++) {
					arr[i].innerHTML = translation[key][lng];
				}
			} else {
				arr[0].innerHTML = translation[key][lng];
			}
		}
	}

	if (languageType) {
		select.value = languageType;
		if (languageType !== "en") {
			changeLanguage(languageType);
		}
	} else {
		localStorage.setItem("language", "en");
		select.value = "en";
	}

	select.addEventListener("change", (event) => {
		const value = event.target.value;
		localStorage.setItem("language", value);
		changeLanguage(value);
	});

	// Enroll
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

	// Modal
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
			const languageType =  localStorage.getItem("language");
			const serviceName = target.dataset.service;
			const serviceData = servicesData[serviceName][languageType];
	
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
	
	//Slider 
	new Swiper(".slider", {
		slidesPerView: 3,
		spaceBetween: 30,
		preloadImages: false,
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

	// Calendar
	const calendarCon = document.querySelector(".calendar__container");
	const setmoreIframe = `<iframe class="calendar__frame" src="https://easyenprep.setmore.com/vladyslav-shapoval" loading="lazy" scrolling="yes" width="100%" height="100%" frameborder="0"></iframe>`;	
	
	window.addEventListener("load", () => {
		calendarCon.innerHTML = setmoreIframe;
	});
});

