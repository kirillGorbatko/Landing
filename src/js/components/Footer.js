import { GLOBAL_VARS } from 'utils/constants';
import Accordion from './Accordion';

export default class Footer {
	get SELECTORS() {
		return {
			langParent: '.footer_lang',
			langBtn: '.footer_lang_current',
			accTriggers: '.accTrigger',
		};
	}

	get CLASSNAMES() {
		return {
			languagesOpenState: 'footer_lang--open_state',
			accActiveStateName: 'footer__column--active-mod',
		};
	}

	constructor() {
		this.$langParent = document.querySelector(this.SELECTORS.langParent);
		this.$langBtn = this.$langParent.querySelector(this.SELECTORS.langBtn);
		this.$accTrigers = document.querySelectorAll(this.SELECTORS.accTriggers);

		this.init = this.init.bind(this);
		this.init();
	}

	init() {
		if (!this.$langBtn || !this.$langParent || !this.$accTrigers.length) return;

		// accordion
		new Accordion({
			triggers: this.$accTrigers,
			activeStateName: this.CLASSNAMES.accActiveStateName,
			media: GLOBAL_VARS.mediaPoint2,
		}).init();

		document.addEventListener('click', (e) => {
			const openStateClass = this.CLASSNAMES.languagesOpenState;
			const isOpen = this.$langParent.classList.contains(openStateClass);
			const checkButton = e.target === this.$langBtn || e.target.closest(this.SELECTORS.langBtn);

			if (isOpen) {
				if (!e.target.closest(this.SELECTORS.langParent) || checkButton) {
					this.$langParent.classList.remove(openStateClass);
				}
			} else if (checkButton) {
				this.$langParent.classList.add(openStateClass);
			}
		});
	}
}
