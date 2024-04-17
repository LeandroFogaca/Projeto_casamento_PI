// import React from 'react';

export default function FormGuest() {
	function print() {
		console.log('print');
	}

	return (
		<div className="container-fluid m-2">
			<h4 className="my-4">Convidado</h4>
			<form className="col">
				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className=" form-label col-3">Nome</label>
					</div>
					<div className="col-auto">
						<input
							id="name"
							className="form-control"
							type="text"
							placeholder="nome completo"
							// value=""
							onChange={print}
						/>
					</div>
				</div>
				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="form-label col-3">Idade</label>
					</div>
					<div className="col-auto">
						<input
							onChange={print}
							type="number"
							className="form-control"
							id="age"
							placeholder="idade"
						/>
					</div>
				</div>

				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="form-label col-3">Mesa</label>
					</div>
					<div className="col-auto">
						<input
							onChange={print}
							type="number"
							className="form-control"
							id="table"
							placeholder="número da mesa"
							// value=""
						/>
					</div>
				</div>

				<div className="row justify-content-center m-2">
					<div className="col-4">
						<label className="form-label col-3 ">Comentário:</label>
					</div>
					<div className="col-auto">
						<input
							onChange={print}
							type="text"
							className="form-control"
							id="comment"
							placeholder="madrinha, padrinho, etc."
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
