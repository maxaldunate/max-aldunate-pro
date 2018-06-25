import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';
import SocialSection from './social-section';
import AboutSection from './about-section';

import MyWorks from '../config/my-works';
import MySocials from '../config/my-socials';
import AboutMe from '../config/about-me';
import ThisSite from '../config/this-site';

ReactDOM.render(<ExampleWork work={MyWorks} />, document.getElementById('example-work'));
ReactDOM.render(<SocialSection social={MySocials} />, document.getElementById('social-section'));
ReactDOM.render(<AboutSection about={AboutMe} />, document.getElementById('about-section'));
ReactDOM.render(<AboutSection about={ThisSite} />, document.getElementById('this-site'));

console.log("Load Ok!");