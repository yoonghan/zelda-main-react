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
} from 'chart.js'
import { writeData } from './plotterHelper'

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

const ChartPlotter = ({
  data,
  labels,
}: {
  data: number[][]
  labels: string[]
}) => <Line options={options} data={writeData(data, labels)} />

export default ChartPlotter
