import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import MyWorks from '../config/my-works'

describe("ExampleWorkModal component", () => {
	let component = shallow(<ExampleWorkModal example={MyWorks[0]} />);
	let anchors = component.find("a");

	it("Should containt a single 'a' element", () => {
		expect(anchors.length).toEqual(1);
	});

	it("Should link to our project", () => {
		expect(anchors.prop('href')).toEqual(MyWorks[0].href);
	});

});