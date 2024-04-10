// import React from 'react';

export default function FormGuest() {
	function print() {
		console.log('print');
	}

	return (
		<div className="col-8 m-5">
			<h4 className="mb-3">Convidado</h4>
			<form className="col row-col-sm">
				<div className="row m-2">
					<label className=" col-3 form-label">Nome</label>
					<input
						id="name"
						className="form-control col "
						type="text"
						placeholder=""
						// value=""
						onChange={print}
					/>
				</div>

				<div className="row m-2">
					<label className=" col-3 form-label">Mesa</label>
					<input
						onChange={print}
						type="number"
						className="form-control col"
						id="table"
						placeholder=""
						// value=""
					/>
				</div>

				<div className="row m-2">
					<label className="form-label col-3">Comentário:</label>
					<input
						onChange={print}
						type="text"
						className="form-control col"
						id="comment"
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
