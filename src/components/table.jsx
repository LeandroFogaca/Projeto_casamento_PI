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
		if (lista.name != '') {
			item.present = !item.present;
			events[id].lista[index].present = item.present;
			setEvents(events);
			setLista(events[id].lista);
			setToggled(!toggled);
		}
	};

	useEffect(() => {
		if (lista.length <= 1) return;
		updateJSONInLocalStorage('allData', id, lista);
		const data = readJSONFromLocalStorage('allData');
		console.log(data[id].lista[0].present);
	}, [toggled]);

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
						</tr>
					</thead>
					<tbody>
						{lista.map((item, index) => (
							<tr key={index} onClick={() => toggle(item, index)}>
								<td>{index}</td>
								<td>{item.name}</td>
								<td>{item.table}</td>
								<td>{item.present ? 'Sim' : 'Não'}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
