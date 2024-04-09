// import React from 'react';
import Footer from '../components/footer';
import ToolBar from '../components/toolBar';

function guesMngt() {
	return (
		<div>
			<ToolBar newBtn={'/app/newguest'} />
			<h1>Página de gerencioamento de convidados</h1>

			<Footer />
		</div>
	);
}

export default guesMngt;
