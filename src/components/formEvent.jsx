// import React from 'react';

export default function FormEvent() {
	function print() {
		console.log('print');
	}

	return (
		<div className="col-8 m-5">
			<h4 className="mb-3">Nova Cerimônia</h4>
			<form className="col row-col-sm">
				<div className="row m-2">
					<label className=" col-3 form-label">Noiva:</label>
					<input
						id="noiva"
						className="form-control col "
						type="text"
						placeholder=""
						// value=""
						onChange={print}
					/>
				</div>

				<div className="row m-2">
					<label className=" col-3 form-label">Noivo</label>
					<input
						onChange={print}
						type="text"
						className="form-control col"
						id="lastName"
						placeholder=""
						// value=""
					/>
				</div>

				<div className="row m-2">
					<label className="col-3 form-label">Email</label>
					<input
						onChange={print}
						type="email"
						className="col form-control"
						id="email"
						placeholder="you@example.com"
					/>
				</div>

				<div className="row m-2">
					<label className="form-label col-3">Endereço:</label>
					<input
						onChange={print}
						type="text"
						className="form-control col"
						id="address"
						placeholder="1234 Main St"
					/>
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
