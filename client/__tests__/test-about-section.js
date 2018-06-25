import React from 'react';
import { shallow } from 'enzyme';
import AboutSection from '../js/about-section'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import AboutMe from '../config/about-me';

describe("AboutSection component", () => {
	let component = shallow(<AboutSection about={AboutMe} />);
    let anchor = component.find("p");

	it("Should contain n numbers of element", () => {
		expect(anchor.length).toEqual(AboutMe.length);
	});

});