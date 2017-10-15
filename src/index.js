import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App2';
import Clock from './Clock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Clock title="hi class" sleepTime={3000} txt="Text for this control" />, document.getElementById('root'));
registerServiceWorker();


/**
 *
 * #1
 *
 * #2
 *
 * #3
 *  props readable, states updateable
 * #4
 *
 * #5
 *
 * #6
 *  Things happens
 */