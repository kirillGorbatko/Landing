import Swiper, { Navigation, Parallax } from 'swiper';
import 'swiper/css';

const testimonialsSlider = () => {
	const selectors = {
		section: '.js-testimonials',
		slider: '.js-testimonials-slider',
		arrowPrev: '.js-testimonials-arrow-prev',
		arrowNext: '.js-testimonials-arrow-next',
	};

	const $sections = document.querySelectorAll(selectors.section);
	if (!$sections.length) return;

	Swiper.use([Navigation, Parallax]);

	$sections.forEach($section => {
		const $slider = $section.querySelector(selectors.slider);
		const $prevArrow = $section.querySelector(selectors.arrowPrev);
		const $nextArrow = $section.querySelector(selectors.arrowNext);

		if (!$slider || !$prevArrow || !$nextArrow) return;

		const testimonialsSwiper = new Swiper($slider, {
			speed: 800,
			slidesPerView: 1,
			parallax: true,
			navigation: {
				nextEl: $nextArrow,
				prevEl: $prevArrow,
			},
		});
	});
};

export default testimonialsSlider;
