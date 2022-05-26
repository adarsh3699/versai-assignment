import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

import Bar from './components/Bar';
import Content from "./components/content";

import backgroundImg from "./img/background.png"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div id='main'>
        <img src={ backgroundImg } id='backgroundImg' />
        <Bar />
        <Content />
	</div>
);
