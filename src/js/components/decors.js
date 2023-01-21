import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import DrawSVGPlugin from '../vendors/drawsvgplugin.min';

const decors = () => {
	const $decors = document.querySelector('.decors');
	if (!$decors) return;
	const $items = $decors.querySelectorAll('.decors__item');
	if (!$items.length) return;

	const $img = document.querySelector('.hero__image');

	gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: $img,
			start: 'top 60%',
			markers: true,
			// onEnter: () => tl.play(),
		},
	});

	const options = ({
		ease: 'expo',
		drawSVG: 0.1,
	});

	gsap
		.from($img, {
			...options,
			duration: 3.4,
		});
};

export default decors;
