import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
	const [usermail, setUsermail] = useState('');
	const [userpassword, setPassword] = useState('');

	const navigate = useNavigate();

	function validate(formData) {
		formData.preventDefault();
		const mail = usermail;
		const password = userpassword;

		if (mail === 'marli@teste.com' && password === '123456') {
			navigate('/app');
			// alert(`You searched for '${mail}' and '${password}`);
		}
	}

	// handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	// Handle login logic here
	// 	const Email = 'marli@teste.com';
	// 	const Password = '123456';

	// 	if (this.state.username === Email && this.state.password === Password) {
	// 		window.location.href = './mainApp';
	// 	} else {
	// 		alert('Usuário ou senha inválidos!');
	// 	}
	// };

	return (
		<main className="form-signin">
			<form id="loginForm" onSubmit={validate}>
				<img
					className="mb-4"
					src="/src/assets/brand/bootstrap-logo.svg"
					alt=""
					width="72"
					height="57"
				/>
				<h1 className="h3 mb-3 fw-normal">Login</h1>

				<div className="form-floating">
					<input
						type="email"
						className="form-control"
						id="userEmail"
						placeholder="name@example.com"
						onChange={(e) => setUsermail(e.target.value)}
					/>
					<label htmlFor="floatingInput">e-mail</label>
				</div>
				<div className="form-floating">
					<input
						type="password"
						className="form-control"
						id="userPassword"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<label htmlFor="floatingPassword">senha</label>
				</div>

				<button className="w-100 btn btn-lg btn-primary" type="submit">
					Entrar
				</button>
				<p className="mt-5 mb-3 text-muted">
					Sistema de Gerenciamento de convidados
				</p>
			</form>
		</main>
	);
}

export default LoginPage;
