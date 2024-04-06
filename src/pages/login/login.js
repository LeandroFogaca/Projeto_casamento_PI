const Email = 'marli@teste.com';
const Password = '123456';

let loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	let username = document.getElementById('userEmail').value;
	let password = document.getElementById('userPassword').value;

	if (username === Email && password === Password) {
		window.location.href = '../main/index.html';
	} else {
		alert('Usuário ou senha inválidos!');
	}
});
