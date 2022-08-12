import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseLayout from './components/baseLayout';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<BaseLayout />
			</BrowserRouter>
		</div>
	);
};


export default App;
