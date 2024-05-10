// import React from 'react';
import Toolbar from '../components/toolBar';
import Footer from '../components/footer';
import FormEvent from '../components/formEvent';

function newEvent() {
	return (
		<div>
			<Toolbar newBtn={'/app/newevent'} />
			<FormEvent />
			<Footer />
		</div>
	);
}

export default newEvent;
