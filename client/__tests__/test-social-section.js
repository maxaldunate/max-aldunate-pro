import React from 'react';
import { shallow } from 'enzyme';
import SocialSection from '../js/social-section'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import MySocials from '../config/my-socials'

describe("SocialSection component", () => {
	let component = shallow(<SocialSection social={MySocials} />);

	it("Should be a 'span' element", () => {
		expect(component.type()).toEqual('span');
	});

});