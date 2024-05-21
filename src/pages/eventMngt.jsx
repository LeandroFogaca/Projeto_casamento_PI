// import React from 'react';
// import Footer from '../components/footer';
import ToolBar from '../components/toolBar';
import Table from '../components/table';

function eventMngt() {
	return (
		<div>
			<ToolBar newBtn={'/app/newguest/'} />
			<Table />
			{/* <Footer /> */}
		</div>
	);
}

export default eventMngt;
