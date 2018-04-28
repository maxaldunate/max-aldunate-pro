import React from 'react';
import { shallow } from 'enzyme';
import SocialSectionElement from '../js/social-section-element'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import MySocials from '../config/my-socials';

describe("SocialSectionElement component", () => {
	let component = shallow(<SocialSectionElement social={MySocials[0]} />);
    let anchor = component.find("a");

	it("Should contain a single 'i' element", () => {
		expect(anchor.length).toEqual(1);
	});

	it("Should have the title set correctly", () => {
		expect(anchor.prop('title')).toEqual(MySocials[0].title);
	});

});