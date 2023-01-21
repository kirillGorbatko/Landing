import Swiper, { Scrollbar, Parallax } from 'swiper';
import 'swiper/css';

const brandsSlider = () => {
	const selectors = {
		section: '.js-brands',
		slider: '.js-brands-slider',
		scrollbar: '.js-brands-scrollbar',
	};

	const $sections = document.querySelectorAll(selectors.section);
	if (!$sections.length) return;

	Swiper.use([Scrollbar, Parallax]);

	$sections.forEach($section => {
		const $slider = $section.querySelector(selectors.slider);
		const $scrollbar = $section.querySelector(selectors.scrollbar);

		if (!$slider || !$scrollbar) return;

		const brandsSwiper = new Swiper($slider, {
			speed: 800,
			slidesPerView: 'auto',
			parallax: true,
			scrollbar: {
				el: $scrollbar,
				draggable: true,
			},
			breakpoints: {
				320: {
					spaceBetween: 40,
				},
				768: {
					spaceBetween: 86,
				},
			},
		});
	});
};

export default brandsSlider;
