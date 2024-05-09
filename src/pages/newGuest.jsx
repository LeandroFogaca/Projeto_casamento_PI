// import React from 'react';
import Footer from '../components/footer';
import ToolBar from '../components/toolBar';
import FormGuest from '../components/formGuest';

function newGuest() {
	return (
		<div>
			<ToolBar newBtn={'/app/newguest'} />
			<FormGuest />
			<Footer />
		</div>
	);
}

export default newGuest;
