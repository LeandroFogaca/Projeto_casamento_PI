import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Report = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [lista, setLista] = useState([
        {
            name: '',
            age: '',
            table: '',
            comment: '',
            present: false,
        },
    ]);

    const [totais, setTotais] = useState({
        totalConvidados: 0,
        totalPresentes: 0,
        totalAusentes: 0,
        totalMenor12: 0,
    });

    function calculateTotals() {
        let totalConvidados;
        let totalPresentes;
        let totalAusentes;
        let totalMenor12;

        if (lista) {
            totalConvidados = lista.length;
            totalPresentes = lista.filter((guest) => guest.present).length;
            totalAusentes = totalConvidados - totalPresentes;
            totalMenor12 = lista.filter((guest) => guest.age < 12).length;
        }

        setTotais({
            totalConvidados,
            totalPresentes,
            totalAusentes,
            totalMenor12,
        });
    }

    useEffect(() => {
        calculateTotals();
        console.log(lista);
    }, [lista]);

    useEffect(() => {
        if (id !== null && id !== undefined) {
            const allData = JSON.parse(localStorage.getItem('allData'));
            const templista = allData[id].lista;
            setLista(templista);
            console.log(templista);
        }
    }, [id]);

    function goBack() {
        navigate(-1);
    }

    return (
        <div>
            <h1>Report</h1>
            <p>Total Convidados: {totais.totalConvidados}</p>
            <p>Total Presentes: {totais.totalPresentes}</p>
            <p>Total Ausentes: {totais.totalAusentes}</p>
            <p>Total Menor de 12 anos: {totais.totalMenor12}</p>

            <button type="button" onClick={goBack}>
                Voltar
            </button>
        </div>
    );
};

export default Report;
