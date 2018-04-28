import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work'

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

/*
	it("Should allow the modal to open and close", () => {
		component.instance().openModal();
		expect(component.instance().this.state.modalOpen).toBe(true);
		component.instance().closeModal();
		expect(component.instance().this.state.modalOpen).toBe(false);
	});
*/
});

describe("ExampleWorkBubble component", () => {
	let mockOpenModalFn = jest.fn();
	let component = shallow(<ExampleWorkBubble example={MyWorks[1]} openModal={mockOpenModalFn} />);
	let images = component.find("img");

	it("Should contain a single 'img' element", () => {
		expect(images.length).toEqual(1);
	});

	it("Should have the image src set correctly", () => {
		expect(images.prop('src')).toEqual(MyWorks[1].image.src);
	});

	it("Should call the openModal handler when clicked", () => {
		component.find('.section__exampleWrapper').simulate('click');
		expect(mockOpenModalFn).toHaveBeenCalled();
	});
});