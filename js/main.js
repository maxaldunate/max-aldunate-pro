import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

import MyWorks from '../config/my-works'

ReactDOM.render(<ExampleWork work={MyWorks}/>, document.getElementById('example-work'))

console.log("Load Ok!");