// ------------------- imports
import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad, onWindowResize } from 'utils';
// ------------------- imports###
import Header from '../components/Header';
import Footer from '../components/Footer';
// ------------------  import components
import { calcViewportHeight } from '../utils';
// ------------------  import components###

export default class Layout {
	constructor() {
		this.init = this.init.bind(this);
		this.init();
	}

	loadFunc() {
		console.log('layout load');
		calcViewportHeight();
		const header = new Header();
		const footer = new Footer();
	}

	init() {
		onWindowResize(() => {
			calcViewportHeight();
		});

		this.loadFunc();
	}
}
