// import React from 'react';

export default function FormEvent() {
	function print() {
		console.log('print');
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
							// value=""
							onChange={print}
						/>
					</div>
				</div>

				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className=" col-3 form-label">Noivo</label>
					</div>
					<div className="col-auto">
						<input
							onChange={print}
							type="text"
							className="form-control col"
							id="lastName"
							placeholder="nome completo"
							// value=""
						/>
					</div>
				</div>

				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="col-3 form-label">Email</label>
					</div>
					<div className="col-auto">
						<input
							onChange={print}
							type="email"
							className="col form-control"
							id="email"
							placeholder="seu@email.com"
						/>
					</div>
				</div>

				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="form-label col-3">Endereço:</label>
					</div>
					<div className="col-auto">
						<input
							onChange={print}
							type="text"
							className="form-control col"
							id="address"
							placeholder="local da cerimônia"
						/>
					</div>
				</div>

				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="form-label ">Data:</label>
					</div>
					<div className="col-auto">
						<input
							onChange={print}
							type="date"
							className="form-control"
							id="date"
							placeholder=""
						/>
					</div>
				</div>

				<hr className="my-4" />
				<div>
					<button className="m-3" type="button">
						Voltar
					</button>
					<button className="m-3" type="button">
						Salvar
					</button>
				</div>
			</form>
		</div>
	);
}
