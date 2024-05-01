import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Title, Tooltip, Legend);

const ReporteCategoria = () => {

    const [claves, setClaves] = useState([]);
    const [valores, setValores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/reportecategoria', {
                    method: 'GET',
                });
                if (response.ok) {
                    const data = await response.json();
                    setClaves(Object.keys(data.countByCategory));
                    setValores(Object.values(data.countByCategory))
                }
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        };

        fetchData();
    }, []);
    
    const data = {
        labels: claves,
        datasets: [
            {
                label: 'Ventas',
                data: valores,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ width: '500px', height: '500px', backgroundColor: 'white' }}>
            <Pie data={data} />
        </div>
    );
};

export default ReporteCategoria;
