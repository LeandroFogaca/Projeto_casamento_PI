import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { updateListaJSONInLocalStorage } from '../db';

export default function FormGuest() {
	const navigate = useNavigate();
	const { id } = useParams();

	const [guestList, setGuestList] = useState();
	const [guest, setGuest] = useState({
		name: '',
		age: '',
		table: '',
		comment: '',
	});

	useEffect(() => {
		if (id !== null && id !== undefined) {
			const allData = JSON.parse(localStorage.getItem('allData'));
			const lista = allData[id].lista;
			setGuestList(lista);
			console.log(guestList);
		}
	}, []);

	function handleInputChange(event) {
		const { id, value } = event.target;
		setGuest((prevState) => ({ ...prevState, [id]: value }));
	}

	function saveGuest() {
		const updatedGuestList = [...guestList, guest];
		updateListaJSONInLocalStorage('allData', id, updatedGuestList);
	}

	function goBack() {
		navigate(-1);
	}

	return (
		<div className="container-fluid m-2">
			<h4 className="my-4">Convidado</h4>
			<form className="col">
				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className=" form-label col-3">Nome</label>
					</div>
					<div className="col-auto">
						<input
							id="name"
							className="form-control"
							type="text"
							placeholder="nome completo"
							value={guest.name || ''}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="form-label col-3">Idade</label>
					</div>
					<div className="col-auto">
						<input
							onChange={handleInputChange}
							type="number"
							className="form-control"
							id="age"
							placeholder="idade"
							value={guest.age || ''}
						/>
					</div>
				</div>

				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="form-label col-3">Mesa</label>
					</div>
					<div className="col-auto">
						<input
							onChange={handleInputChange}
							type="number"
							className="form-control"
							id="table"
							placeholder="número da mesa"
							value={guest.table || ''}
						/>
					</div>
				</div>

				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="form-label col-3 ">Comentário:</label>
					</div>
					<div className="col-auto">
						<input
							onChange={handleInputChange}
							type="text"
							className="form-control"
							id="comment"
							placeholder="madrinha, padrinho, etc."
							value={guest.comment || ''}
						/>
					</div>
				</div>

				<hr className="my-4" />
				<div>
					<button className="m-3" type="button" onClick={goBack}>
						Voltar
					</button>
					<button className="m-3" type="button" onClick={saveGuest}>
						Salvar
					</button>
				</div>
			</form>
		</div>
	);
}
