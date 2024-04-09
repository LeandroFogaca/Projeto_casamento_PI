// import React from 'react';
import ToolBar from '../components/toolBar';
import Cards from '../components/cards';
import Footer from '../components/footer';

function MainApp() {
	return (
		<div>
			<ToolBar newBtn={'/app/newevent'} />
			<Cards />
			<Footer />
		</div>
	);
}

export default MainApp;
