import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork from '../js/example-work'
import ExampleWorkBubble from '../js/example-work-bubble';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import MyWorks from '../config/my-works'

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