// import React from 'react';
import { Link } from 'react-router-dom';

export default function toolBar() {
	return (
		<div>
			<nav
				className="navbar navbar-dark bg-dark"
				aria-label="First navbar example">
				<div className="container-fluid">
					<Link className="navbar-brand" to={`/app`}>
						Início
					</Link>
					<form>
						<input
							className="form-control"
							type="text"
							placeholder="Search"
							aria-label="Search"
						/>
					</form>
				</div>
			</nav>
		</div>
	);
}
