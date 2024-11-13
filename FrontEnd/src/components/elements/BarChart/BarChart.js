import {Bar, Line} from "react-chartjs-2";
import {
    Chart as ChartJS, registerables
} from 'chart.js';

// Đăng ký các thành phần
ChartJS.register(
    ...registerables
);

function BarChart({data}){
    const options = {
        // maintainAspectRatio: false,

        plugins: {
            legend: {
                display: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10,
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
}

export default BarChart;