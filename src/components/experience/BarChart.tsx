import { Bar } from 'react-chartjs-2'

type BarChartProps = {
    data: {
        labels: string[];
        datasets: any[];
    };
    options: {
        responsive: boolean;
        maintainAspectRatio: boolean;
        plugins: any;
        scales: any;
    }
}

const BarChart = ({ data, options }: BarChartProps) => {
    return <Bar
        // @ts-ignore
        type="bar"
        data={data}
        options={options}
    />
};

export default BarChart
