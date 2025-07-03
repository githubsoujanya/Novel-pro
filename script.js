const wrapper = document.getElementById('sliderWrapper');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function goToSlide(index) {
	wrapper.style.transform = `translateX(-${index * 100}vw)`;
}

// Handle next button
nextBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		if (currentIndex < totalSlides - 1) {
			currentIndex++;
			goToSlide(currentIndex);
		}
	});
});

// Handle prev button
prevBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		if (currentIndex > 0) {
			currentIndex--;
			goToSlide(currentIndex);
		}
	});
});