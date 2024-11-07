import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { updateListaJSONInLocalStorage } from '../db';
import { saveAPIconvidados } from '../api';

export default function FormGuest() {
	const navigate = useNavigate();
	const { id } = useParams();

	const [guestList, setGuestList] = useState([]);
	const [guest, setGuest] = useState({
		nome: '',
		idade: '',
		mesa: '',
		comentario: '',
		presente: false,
	});

	useEffect(() => {
		if (id !== null && id !== undefined) {
			// const allData = JSON.parse(localStorage.getItem('allData'));
			// const lista = allData[id].lista;
			// setGuestList(lista);
		}
	}, [id]);

	function handleInputChange(event) {
		const { id, value } = event.target;
		setGuest((prevState) => ({ ...prevState, [id]: value }));
	}

	function saveGuest() {
		const updatedGuestList = [...guestList, guest];
		setGuestList(updatedGuestList); // Update the local state
		updateListaJSONInLocalStorage('allData', id, updatedGuestList); // Persist the updated list
		alert('Convidado cadastrado com sucesso!');
		setGuest({
			nome: '',
			idade: '',
			mesa: '',
			comentario: '',
			presente: false,
		});
	}

	function saveGuestAPI() {
		guest.evento = id;
		console.log(guest);

		saveAPIconvidados(guest)
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error);
			});
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
						<label className="form-label col-3">Nome</label>
					</div>
					<div className="col-auto">
						<input
							id="nome"
							className="form-control"
							type="text"
							placeholder="nome completo"
							value={guest.nome}
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
							id="idade"
							placeholder="idade"
							value={guest.idade}
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
							id="mesa"
							placeholder="número da mesa"
							value={guest.mesa}
						/>
					</div>
				</div>
				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="form-label col-3">Comentário:</label>
					</div>
					<div className="col-auto">
						<input
							onChange={handleInputChange}
							type="text"
							className="form-control"
							id="comentario"
							placeholder="madrinha, padrinho, etc."
							value={guest.comentario}
						/>
					</div>
				</div>
				<hr className="my-4" />
				<div>
					<button className="m-3" type="button" onClick={goBack}>
						Voltar
					</button>
					<button className="m-3" type="button" onClick={saveGuestAPI}>
						Salvar
					</button>
				</div>
			</form>
		</div>
	);
}
