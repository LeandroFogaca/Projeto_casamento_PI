import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Table() {
	const { id } = useParams();

	const [lista, setLista] = useState([
		{
			name: '',
			age: '',
			table: '',
			comment: '',
		},
	]);

	useEffect(() => {
		if (id !== null && id !== undefined) {
			const allData = JSON.parse(localStorage.getItem('allData'));
			const eventLista = allData[id].lista;

			setLista(eventLista);
			console.log(...eventLista);
			console.log(lista);
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
						</tr>
					</thead>
					<tbody>
						{lista.map((item, index) => (
							<tr key={index}>
								<td>{index}</td>
								<td>{item.name}</td>
								<td>{item.table}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
