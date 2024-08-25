import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
	saveJSONToLocalStorage,
	updateJSONInLocalStorage,
	deleteJSONFromLocalStorage,
} from '../db';

export default function FormEvent() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [formData, setFormData] = useState({
		noiva: '',
		noivo: '',
		email: '',
		endereco: '',
		data: '',
		lista: [],
	});

	useEffect(() => {
		// console.log(id);
		if (id !== null && id !== undefined) {
			const allData = JSON.parse(localStorage.getItem('allData'));
			const eventData = allData[id];
			setFormData(eventData);
			console.log(formData);
		} else {
			setFormData({
				noiva: '',
				noivo: '',
				email: '',
				endereco: '',
				data: '',
				lista: [],
			});
		}
	}, []);

	function handleInputChange(event) {
		const { id, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [id]: value }));
	}

	function toInitialScreen() {
		navigate('/app');
	}

	function saveFormData() {
		const noiva = document.getElementById('noiva').value;
		const noivo = document.getElementById('noivo').value;
		const email = document.getElementById('email').value;
		const endereco = document.getElementById('endereco').value;
		const data = document.getElementById('data').value;
		const lista = [];

		const formData = {
			noiva,
			noivo,
			email,
			endereco,
			data,
			lista,
		};
		if (id !== null && id !== undefined) {
			updateJSONInLocalStorage('allData', id, formData);
		} else {
			saveJSONToLocalStorage('allData', formData);
		}

		alert('Dados salvos com sucesso!');
	}

	function deleteFormData(id) {
		deleteJSONFromLocalStorage('allData', id);
	}

	return (
		<div className="container-fluid m-2">
			<h4 className="my-4">Cerimônia</h4>
			<form className="col">
				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className=" form-label">Noiva:</label>
					</div>
					<div className="col-auto">
						<input
							id="noiva"
							className="form-control "
							type="text"
							placeholder="nome completo"
							value={formData.noiva || ''}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className=" col-3 form-label">Noivo:</label>
					</div>
					<div className="col-auto">
						<input
							type="text"
							className="form-control col"
							id="noivo"
							placeholder="nome completo"
							value={formData.noivo}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="col-3 form-label">Email</label>
					</div>
					<div className="col-auto">
						<input
							onChange={handleInputChange}
							type="email"
							className="col form-control"
							id="email"
							placeholder="seu@email.com"
							value={formData.email}
						/>
					</div>
				</div>

				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="form-label col-3">Endereço:</label>
					</div>
					<div className="col-auto">
						<input
							onChange={handleInputChange}
							type="text"
							className="form-control col"
							id="endereco"
							placeholder="local da cerimônia"
							value={formData.endereco}
						/>
					</div>
				</div>

				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="form-label ">Data:</label>
					</div>
					<div className="col-auto">
						<input
							onChange={handleInputChange}
							type="date"
							className="form-control"
							id="data"
							placeholder="dd/mm/aaaa"
							value={formData.data}
						/>
					</div>
				</div>

				<hr className="my-4" />
				<div>
					<button className="m-3" type="button" onClick={toInitialScreen}>
						Voltar
					</button>
					<button className="m-3" type="button" onClick={saveFormData}>
						Salvar
					</button>
					{id ? (
						<button
							className="m-3"
							type="button"
							onClick={() => deleteFormData(id)}>
							Deletar
						</button>
					) : null}
				</div>
			</form>
		</div>
	);
}
