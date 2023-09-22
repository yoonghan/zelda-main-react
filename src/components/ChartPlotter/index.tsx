import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Plotter',
    },
  },
}

export const writeData = (
  data: number[],
  label: string
): ChartData<'line', number[], string> => ({
  labels: [label],
  datasets: [
    {
      label,
      data,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderWidth: 1,
      pointStyle: 'cross',
    },
  ],
})

const ChartPlotter = ({ data, label }: { data: number[]; label: string }) => {
  return <Line options={options} data={writeData(data, label)} />
}

export default ChartPlotter
