import { onWindowScroll } from 'utils';

class Header {
	get SELECTORS() {
		return {
			header: '.header',
			menuTrigger: '.menuTrigger',
		};
	}

	get CLASSNAMES() {
		return {
			bodyOpenMenuState: 'body--open_menu_state',
			headerScrollState: 'header--scroll_state',
			headerPosState: 'header--hide_state',
		};
	}

	constructor() {
		this.$body = document.body;
		this.$header = document.querySelector(this.SELECTORS.header);
		this.$menuTrigger = document.querySelectorAll(this.SELECTORS.menuTrigger);
		this.openMenuState = false;
		this.headerScroll = this.headerScroll.bind(this);
		this.prevScrollPos = window.pageYOffset;

		this.init = this.init.bind(this);
		this.init();
	}

	openMenu() {
		if (!this.openMenuState) {
			this.$body.classList.add(this.CLASSNAMES.bodyOpenMenuState);
			this.openMenuState = true;
		} else {
			this.$body.classList.remove(this.CLASSNAMES.bodyOpenMenuState);
			this.openMenuState = false;
		}
	}

	headerScroll(windowScrollTop) {
		if (windowScrollTop > 10 && !this.$header.classList.contains(this.CLASSNAMES.headerScrollState)) {
			this.$header.classList.add(this.CLASSNAMES.headerScrollState);
		} else if (this.prevScrollPos < 10) {
			this.$header.classList.remove(this.CLASSNAMES.headerScrollState);
		} else if (this.prevScrollPos < window.pageYOffset) {
			this.$header.classList.add(this.CLASSNAMES.headerPosState);
		} else {
			this.$header.classList.remove(this.CLASSNAMES.headerPosState);
		}

		this.prevScrollPos = window.pageYOffset;
	}

	init() {
		if (typeof (this.$header) !== 'undefined' && this.$header != null) {
			onWindowScroll(this.headerScroll);
			this.$menuTrigger.forEach(item => {
				item.addEventListener('click', () => {
					this.openMenu();
				});
			});
		}
	}
}

export default Header;
