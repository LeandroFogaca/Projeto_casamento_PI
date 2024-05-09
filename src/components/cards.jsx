// import React from 'react'
import { useNavigate } from 'react-router-dom';

function Cards() {
	const Navigate = useNavigate();

	function openEvent() {
		Navigate('/app/event');
	}

	function newEvent() {
		Navigate('/app/newevent');
	}

	return (
		<div className="d-flex justify-content-evenly flex-wrap">
			<div className="card m-2 p-2 w-auto mw-50">
				<div className="card-body">
					<h5 className="card-title">Casamento</h5>
					<h6 className="card-subtitle mb-2 text-body-secondary">
						Maria e João
					</h6>
					<p className="card-text">endereço: Rua das Flores, 123</p>

					<button className="m-3" type="button" onClick={openEvent}>
						Abrir
					</button>
					<button className="m-3" type="button" onClick={newEvent}>
						Editar
					</button>
				</div>
			</div>
			<div className="card m-2 w-auto p-2">
				<div className="card-body">
					<h5 className="card-title">Casamento</h5>
					<h6 className="card-subtitle mb-2 text-body-secondary">
						Maria e João
					</h6>
					<p className="card-text">endereço: Rua das Flores, 123</p>

					<button className="m-3" type="button" onClick={openEvent}>
						Abrir
					</button>
					<button className="m-3" type="button">
						Editar
					</button>
				</div>
			</div>
			<div className="card m-2 w-auto p-2">
				<div className="card-body">
					<h5 className="card-title">Casamento</h5>
					<h6 className="card-subtitle mb-2 text-body-secondary">
						Maria e João
					</h6>
					<p className="card-text">endereço: Rua das Flores, 123</p>

					<button className="m-3" type="button">
						Abrir
					</button>
					<button className="m-3" type="button">
						Editar
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cards;
