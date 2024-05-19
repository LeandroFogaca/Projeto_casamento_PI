function saveJSONToLocalStorage(key, json) {
	const existingData = readJSONFromLocalStorage(key) || [];
	existingData.push(json);
	localStorage.setItem(key, JSON.stringify(existingData));
}

function readJSONFromLocalStorage(key) {
	const json = localStorage.getItem(key);
	if (!json) return [];
	return JSON.parse(json);
}

function deleteJSONFromLocalStorage(key, index) {
	const existingData = readJSONFromLocalStorage(key) || [];
	if (index >= 0 && index < existingData.length) {
		existingData.splice(index, 1);
		localStorage.setItem(key, JSON.stringify(existingData));
	} else {
		console.error(`Index ${index} out of bounds`);
	}
}

function updateJSONInLocalStorage(key, index, updatedJson) {
	const existingData = readJSONFromLocalStorage(key) || [];
	if (index >= 0 && index < existingData.length) {
		existingData[index].lista = updatedJson;
		localStorage.setItem(key, JSON.stringify(existingData));
	} else {
		console.error(`Index ${index} out of bounds`);
	}
}

function updateListaJSONInLocalStorage(key, index, updatedListaJson) {
	const existingData = readJSONFromLocalStorage(key) || [];
	if (index >= 0 && index < existingData.length) {
		existingData[index].lista = updatedListaJson;
		localStorage.setItem(key, JSON.stringify(existingData));
	} else {
		console.error(`Index ${index} out of bounds`);
	}
}

function updatePresentValueInLocalStorage(key, index, idLista, updatedValue) {
	const existingData = readJSONFromLocalStorage(key) || [];
	if (index >= 0 && index < existingData.length) {
		existingData[index].lista.present = updatedValue;
		localStorage.setItem(key, JSON.stringify(existingData));
	} else {
		console.error(`Index ${index} out of bounds`);
	}
}

export {
	saveJSONToLocalStorage,
	readJSONFromLocalStorage,
	updateJSONInLocalStorage,
	deleteJSONFromLocalStorage,
	updateListaJSONInLocalStorage,
	updatePresentValueInLocalStorage,
};
