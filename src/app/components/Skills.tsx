// !Components
import BarChart from './BarChart'
import AnimatedText from './AnimatedText'

// !ChartJS Imports
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    Title,
    CategoryScale
} from "chart.js/auto"
import 'chartjs-plugin-datalabels'

// !ChartJS Config
ChartJS.register(
    Tooltip,
    Legend,
    Title,
    CategoryScale // Register CategoryScale for "category" scale
)

// !ChartJS Data
const labels = ['React', 'JavaScript', 'Python', 'TypeScript', 'JQuery', 'CSS', 'Tailwind', 'SASS', 'Bootstrap', 'NextJS', 'NodeJS', 'Flask', 'Express', 'MongoDB', 'MySQL', 'Git', 'Miro', 'etc..']
const data = {
    labels: labels,
    datasets: [{
        axis: 'y',
        label: 'Proficiency (out of 100)',
        data: [85, 85, 70, 70, 60, 90, 90, 70, 80, 75, 85, 70, 85, 80, 70, 90, 70, 100],
        fill: false,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
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
            'rgb(201, 203, 207)',
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 3
    }]
}

// !ChartJS Options
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            position: 'top',
            text: 'Languages, Frameworks, Databases, Tools, and More',
            font: {
                size: 25,
                color: '#111',
            },
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                color: '#333',
                font: {
                    size: 18,
                },
            },
        },
    },
    scales: {
        x: {
            stacked: true,
            ticks: {
                font: {
                    weight: 'bold',
                },
            },
        },
        y: {
            stacked: true,
        },
    },
    animation: {
        duration: 3000,
    }
}



const Skills = () => {

    return (
        <div className='h-full xs:w-[100vw] xs:px-2 xs:h-[400px] w-full'>
            <AnimatedText text={"Skill Sets"} className='text-5xl text-center xs:text-3xl' />
            <BarChart data={data} options={options} />
        </div>
    )
}

export default Skills
