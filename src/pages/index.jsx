// import React from 'react';
import { Link } from 'react-router-dom';

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

			<main className=" h-100 px-3">
				<h1>Cover your page.</h1>
				<p className="lead">
					Cover is a one-page template for building simple and beautiful home
					pages. Download, edit the text, and add your own fullscreen background
					photo to make it your own.
				</p>
				<p className="lead">
					<a
						href="#"
						className="btn btn-lg btn-secondary fw-bold border-white bg-white">
						Learn more
					</a>
				</p>
			</main>

			<Footer />
		</div>
	);
}
export default Index;
