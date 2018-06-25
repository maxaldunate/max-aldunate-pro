import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork from '../js/example-work'
import ExampleWorkBubble from '../js/example-work-bubble';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import MyWorks from '../config/my-works'

describe("ExampleWork component", () => {
	let component = shallow(<ExampleWork work={MyWorks} />);

	it("Should be a 'span' element", () => {
		expect(component.type()).toEqual('span');
	});

	it("Should containt as many childre as there are work examples", () => {
		expect(component.find("ExampleWorkBubble").length).toEqual(MyWorks.length);
	});

	it("Should allow the modal to open and close", () => {
		component.instance().openModal();
		expect(component.instance().state.modalOpen).toBe(true);
		component.instance().closeModal();
		expect(component.instance().state.modalOpen).toBe(false);
	});
});
