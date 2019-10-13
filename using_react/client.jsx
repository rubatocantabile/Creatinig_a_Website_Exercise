import React from 'react';
import ReactDom from 'react-dom';

import index from './dist/index';
// import './dist/style.css';

import { hot } from 'react-hot-loader/root';

// import css from './style.css';

const Hot = hot(index);


ReactDom.render(<Hot />, document.getElementById('root'));