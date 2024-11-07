// import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { readJSONFromLocalStorage } from '../db';
import { getAPIeventos } from '../api';

function Cards() {
	const [events, setEvents] = useState();
	const [isVisible, setIsvisible] = useState();
	const Navigate = useNavigate();

	useEffect(() => {
		// const data = readJSONFromLocalStorage('allData');
		const dataAPI = getAPIeventos();
		dataAPI.then((data) => {
			setEvents(data.results);
			console.log(data.results);
			if (data.results.length > 0) {
				setIsvisible(true);
			}
		});

		// setEvents(data);
		// console.log(data);
	}, []);

	function openEvent(index) {
		Navigate(`/app/event/${index}`);
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
							<h5 className="card-title">Casamento</h5>
							<h6 className="card-subtitle mb-2 text-body-secondary">
								{event.noiva} e {event.noivo}
							</h6>
							<p className="card-text">{event.endereco}</p>
							<p className="card-text">{event.data}</p>

							<button
								className="m-3"
								type="button"
								onClick={() => openEvent(event.id)}>
								{/* onClick={() => console.log(event.id)}>  */}
								Abrir
							</button>
							<button
								className="m-3"
								type="button"
								onClick={() => newEvent(event.id)}>
								Editar
							</button>

							<button
								className="m-3"
								type="button"
								onClick={() => Navigate(`/app/report/${event.id}`)}>
								Relatório
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
