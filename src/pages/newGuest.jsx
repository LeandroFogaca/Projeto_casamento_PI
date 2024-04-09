// import React from 'react';
import Footer from '../components/footer';
import ToolBar from '../components/toolBar';

function newGuest() {
	return (
		<div>
			<ToolBar newBtn={'/app/newguest'} />
			<h1>Página de cadastro de novo convidado</h1>

			<Footer />
		</div>
	);
}

export default newGuest;
