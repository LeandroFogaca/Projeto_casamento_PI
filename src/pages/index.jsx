// import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/alianca1.jpg';
import Footer from '../components/footer';

function Index() {
	return (
		<div className=" h-100">
			<header className="mb-auto">
				<nav
					className="navbar navbar-expand-lg navbar-light bg-light rounded"
					aria-label="Eleventh navbar example">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							Página Principal
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarsExample09"
							aria-controls="navbarsExample09"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarsExample09">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">
										Serviços
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">
										Galeria
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">
										contato
									</a>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to={`./login`}>
										Login
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>

			<main
				className="h-100vh p-5 px-3 "
				style={{
					backgroundImage: `url(${BackgroundImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '100vh',
				}}>
				<h1>Criando Momentos Inesquecíveis</h1>
				<p>
					O casamento é o momento de celebrar o seu amor, e para que esse
					momento seja inesquecível é necessário pensar em cada detalhe. Nos
					permita ajudar a transformar esse dia em uma memória fabulosa que
					durará uma vida inteira. Juntos, vamos construir um momento mágico
					para você e seus convidados!
				</p>
			</main>

			<Footer />
		</div>
	);
}
export default Index;
