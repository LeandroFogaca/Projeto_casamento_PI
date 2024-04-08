const casamentoExemplo = {
	noiva: 'Maria',
	noivo: 'João',
	data: '01/01/2021',
	local: 'Igreja São José',
	horario: '10:00',
};

const casamentoExemplo2 = {
	noiva: 'Ana',
	noivo: 'Pedro',
	data: '02/02/2022',
	local: 'Igreja São Pedro',
	horario: '11:00',
};

let listaCasamentos = [casamentoExemplo, casamentoExemplo2];

const domNode = document.getElementById('react-components');
const root = ReactDOM.createRoot(domNode);
root.render(<h1>Hello, world</h1>);
