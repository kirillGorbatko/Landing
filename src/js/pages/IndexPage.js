import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';

import decors from 'components/decors';
import services from 'components/services';
import design from 'components/design';
import teamwork from 'components/teamwork';
import testimonials from 'components/testimonials';
import brands from 'components/brands';
import subscribe from 'components/subscribe';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		decors();
		services();
		design();
		teamwork();
		testimonials();
		brands();
		subscribe();
	}

	init() {
		this.loadFunc();
	}
}
