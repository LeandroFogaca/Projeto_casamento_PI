const API_URL = 'http://localhost:8000/';

async function saveAPIevento(evento) {
	console.log(JSON.stringify(evento));
	console.log(API_URL + 'eventos/');
	try {
		const response = await fetch(API_URL + 'eventos/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(evento),
			// mode: 'no-cors',
		});

		if (!response.ok) {
			throw new Error('Network response was not ok ' + response.statusText);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}
}

async function getAPIeventos() {
	try {
		const response = await fetch(API_URL + 'eventos/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Network response was not ok ' + response.statusText);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}
}

async function getAPIconvidados() {
	try {
		const response = await fetch(API_URL + `convidados/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Network response was not ok ' + response.statusText);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}
}


async function saveAPIconvidados(convidado) {
	try {
		const response = await fetch(API_URL + 'convidados/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(convidado),
		});

		if (!response.ok) {
			throw new Error('Network response was not ok ' + response.statusText);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}
}


async function updatePresenteConvidado(id, presente) {
	try {
		const response = await fetch(
			`${API_URL}convidados/${id}/update-presente/`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ presente }),
			}
		);

		if (!response.ok) {
			throw new Error('Network response was not ok ' + response.statusText);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}
}

export {
	saveAPIevento,
	getAPIconvidados,
	getAPIeventos,
	saveAPIconvidados,
	updatePresenteConvidado,
};
