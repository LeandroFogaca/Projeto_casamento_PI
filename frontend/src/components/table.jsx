import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateJSONInLocalStorage } from '../db';
import { getAPIconvidados, updatePresenteConvidado } from '../api';

export default function Table() {
	const { id } = useParams();
	// const [toggled, setToggled] = useState(false);
	const [events, setEvents] = useState();

	const [lista, setLista] = useState([
		{
			name: '',
			age: '',
			table: '',
			comment: '',
			presente: false,
		},
	]);

	const toggle = (item) => {
		console.log(item.id, item.presente);
		updatePresenteConvidado(item.id, !item.presente).then((data) => {
			const updatedLista = lista.map((listItem) =>
				listItem.id === item.id
					? { ...listItem, presente: !listItem.presente }
					: listItem
			);
			console.log('updatedLista', updatedLista);
			setLista(updatedLista);
			// console.log('events', events);
			// events[id].lista = updatedLista;
			// setEvents(events);

			console.log(data);
		});

		// if (lista.name !== '') {
		// 	item.presente = !item.presente;
		// 	const updatedLista = [...lista];
		// 	updatedLista[index].presente = item.presente;
		// 	setLista(updatedLista);
		// 	events[id].lista = updatedLista;
		// 	setEvents(events);
		// 	updateJSONInLocalStorage('allData', id, updatedLista);
		// 	setToggled(!toggled);
		// }
	};

	const deleteItem = (index) => {
		const updatedLista = lista.filter((_, i) => i !== index);
		setLista(updatedLista);
		events[id].lista = updatedLista;
		setEvents(events);
		updateJSONInLocalStorage('allData', id, updatedLista);
	};

	useEffect(() => {
		if (id !== null && id !== undefined) {
			const dataAPI = getAPIconvidados();

			dataAPI.then((data) => {
				setEvents(data.results);
				const eventList = data.results.filter((event) => event.evento == id);
				setLista(eventList);
				console.log(eventList);
			});
		}
	}, []);

	return (
		<div className="mt-4">
			<div className="table-responsive">
				<table className="table table-striped table-sm">
					<thead>
						<tr>
							<th scope="col">id</th>
							<th scope="col">Nome</th>
							<th scope="col">Mesa</th>
							<th scope="col">Presença</th>
							<th scope="col">Ações</th>
						</tr>
					</thead>
					<tbody>
						{lista.map((item, index) => (
							<tr key={index}>
								<td>{index}</td>
								<td>{item.nome}</td>
								<td>{item.mesa}</td>
								<td>
									<button
										onClick={() => toggle(item, index)}
										className="rounded">
										{item.presente ? 'Sim' : 'Não'}
									</button>
								</td>
								<td>
									<button className="rounded" onClick={() => deleteItem(index)}>
										Remover
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
