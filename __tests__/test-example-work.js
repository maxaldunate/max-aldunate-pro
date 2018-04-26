import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

const myWork = [
	{
	'title': 'Microservices .NET',
	'image': {
		'desc': 'example screenshot of a project involving code',
		'src': 'images/example1.png',
		'comment': ''
		}	
	},
	{
	'title': 'DDD3+CQRS+TDD+SOLID',
	'image': {
		'desc': 'example screenshot of a project involving chemistry',
		'src': 'images/example2.png',
		'comment': ''
		}	
	},
	{
	'title': 'C#+JavaScript+Python',
	'image': {
		'desc': 'example screenshot of a project involving cats',
		'src': 'images/example3.png',
		'comment': '“Bengal cat” by roberto shabs is licensed under CC BY 2.0 https://www.flickr.com/photos/37287295@N00/2540855181'
		}	
	}	
]

describe("ExampleWork component", () => {
	let component = shallow(<ExampleWork work={myWork} />);

	it("Should be a 'section' element", () => {
		expect(component.type()).toEqual('section');
	});

	it("Should containt as many childre as there are work examples", () => {
		expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
	});

});

describe("ExampleWorkBubble component", () => {
	let component = shallow(<ExampleWorkBubble example={myWork[1]} />);
	let images = component.find("img");

	it("Should contain a single 'img' element", () => {
		expect(images.length).toEqual(1);
	});

	it("Should have the image src set correctly", () => {
		expect(images.prop('src')).toEqual(myWork[1].image.src);
		expect(5).toEqual(6);
	});
});