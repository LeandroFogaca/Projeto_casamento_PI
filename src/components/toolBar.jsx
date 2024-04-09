// import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function ToolBar(props) {
	ToolBar.propTypes = {
		newBtn: PropTypes.string.isRequired,
	};

	const ftnOfBtn = props.newBtn; //endereço para onde vai o botão novo

	const navigate = useNavigate();

	function newInput() {
		navigate(ftnOfBtn);
		console.log(ftnOfBtn);
	}

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to={`/app`}>
						Início
					</Link>
					<form className="w-50">
						<input
							className="form-control"
							type="text"
							placeholder="Search"
							aria-label="Search"
						/>
					</form>
					<button type="button" onClick={newInput}>
						Novo
					</button>
				</div>
			</nav>
		</div>
	);
}
