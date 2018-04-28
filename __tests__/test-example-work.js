import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import MyWorks from '../config/my-works'

describe("ExampleWork component", () => {
	let component = shallow(<ExampleWork work={MyWorks} />);

	it("Should be a 'section' element", () => {
		expect(component.type()).toEqual('section');
	});

	it("Should containt as many childre as there are work examples", () => {
		expect(component.find("ExampleWorkBubble").length).toEqual(MyWorks.length);
	});

});

describe("ExampleWorkBubble component", () => {
	let component = shallow(<ExampleWorkBubble example={MyWorks[1]} />);
	let images = component.find("img");

	it("Should contain a single 'img' element", () => {
		expect(images.length).toEqual(1);
	});

	it("Should have the image src set correctly", () => {
		expect(images.prop('src')).toEqual(MyWorks[1].image.src);
		//expect(5).toEqual(6);
	});
});