import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readJSONFromLocalStorage, updateJSONInLocalStorage } from '../db';

export default function Table() {
	const { id } = useParams();
	const [toggled, setToggled] = useState(false);
	const [events, setEvents] = useState();

	const [lista, setLista] = useState([
		{
			name: '',
			age: '',
			table: '',
			comment: '',
			present: false,
		},
	]);

	const toggle = (item, index) => {
		if (lista.name !== '') {
			item.present = !item.present;
			const updatedLista = [...lista];
			updatedLista[index].present = item.present;
			setLista(updatedLista);
			events[id].lista = updatedLista;
			setEvents(events);
			updateJSONInLocalStorage('allData', id, updatedLista);
			setToggled(!toggled);
		}
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
			const data = readJSONFromLocalStorage('allData');
			setEvents(data);
			const eventLista = data[id].lista;
			setLista(eventLista);
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
								<td>{item.name}</td>
								<td>{item.table}</td>
								<td>
									<button
										onClick={() => toggle(item, index)}
										className="rounded">
										{item.present ? 'Sim' : 'Não'}
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
