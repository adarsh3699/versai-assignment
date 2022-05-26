import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

import Bar from './components/Bar';
import Content from "./components/Content";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div id='main'>
        <Bar />
        <Content />
	</div>
);
