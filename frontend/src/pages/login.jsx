import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';

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
		}
	}

	return (
		<main className="form-signin w-100 vh-100 d-flex flex-column align-items-center justify-content-center">
			<form id="loginForm" onSubmit={validate} className="align-self-center ">
				<h1 className="h3 mb-3 fw-normal my-2">Login</h1>

				<div className="form-floating  my-2">
					<input
						type="email"
						className="form-control"
						id="userEmail"
						placeholder="name@example.com"
						onChange={(e) => setUsermail(e.target.value)}
					/>
					<label htmlFor="floatingInput">e-mail</label>
				</div>
				<div className="form-floating  my-2">
					<input
						type="password"
						className="form-control"
						id="userPassword"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<label htmlFor="floatingPassword">senha</label>
				</div>

				<button className="w-100 btn btn-lg   my-2 btn-primary" type="submit">
					Entrar
				</button>
				<p className="mt-5 mb-3 text-muted">
					Sistema de Gerenciamento de convidados
				</p>
			</form>
			<Footer />
		</main>
	);
}

export default LoginPage;
