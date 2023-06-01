// !Components
import BarChart from './BarChart'

// !ChartJS Imports
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale
} from "chart.js/auto";
import 'chartjs-plugin-datalabels'

// !ChartJS Config
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale // Register CategoryScale for "category" scale
);

// !ChartJS Data
const labels = ['Languages', 'Frameworks', 'ORM', 'Databases', 'Tools']
const data = {
    labels: labels,
    datasets: [{
        axis: 'y',
        label: 'Skill',
        data: [65, 59, 80, 91, 56, 55, 40],
        fill: false,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};

// !ChartJS Options
var options = {
    responsive: true,
    title: {
        display: true,
        position: "top",
        text: "Bar Graph",
        fontSize: 25,
        fontColor: "#111"
    },
    legend: {
        display: true,
        position: "bottom",
        labels: {
            fontColor: "#333",
            fontSize: 18
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                min: 0
            }
        }]
    }
};

const Skills = () => {

    return (
        <>
            <h2 className="h-full font-bold text-6xl w-full text-center">Skills</h2>
            <BarChart data={data} options={options} />
        </>
    )
}

export default Skills
