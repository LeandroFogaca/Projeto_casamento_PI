// import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { readJSONFromLocalStorage } from '../db';

function Cards() {
	const [events, setEvents] = useState();
	const [isVisible, setIsvisible] = useState();
	const Navigate = useNavigate();

	useEffect(() => {
		const data = readJSONFromLocalStorage('allData');
		setEvents(data);

		console.log(data);
		if (data.length > 0) {
			setIsvisible(true);
		}
	}, []);

	function openEvent() {
		Navigate('/app/event');
	}
	function newEvent(index) {
		Navigate(`/app/newevent/${index}`);
	}

	return (
		<div className="d-flex justify-content-evenly flex-wrap">
			{isVisible ? (
				events.map((event, index) => (
					<div key={index} className="card m-2 p-2 w-auto mw-50">
						<div className="card-body">
							<h5 className="card-title">Casamneto</h5>
							<h6 className="card-subtitle mb-2 text-body-secondary">
								{event.noiva} e {event.noivo}
							</h6>
							<p className="card-text">{event.endereco}</p>
							<p className="card-text">{event.data}</p>

							<button className="m-3" type="button" onClick={openEvent}>
								Abrir
							</button>
							<button
								className="m-3"
								type="button"
								onClick={() => newEvent(index)}>
								Editar
							</button>
						</div>
					</div>
				))
			) : (
				<div>Nenhum dado encontrado!</div>
			)}
		</div>
	);
}

export default Cards;
