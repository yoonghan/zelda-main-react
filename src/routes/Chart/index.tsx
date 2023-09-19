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
import { Box, Grid, Typography } from '@mui/material'

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data: ChartData<'line', number[], string> = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderWidth: 1,
      pointStyle: 'cross',
    },
    {
      label: 'Dataset 2',
      data: [11, 12, 13, 14, 15, 16, 17, 18, 19, 10, 11, 12],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderWidth: 1,
      pointStyle: 'cross',
    },
  ],
}

const Chart = () => {
  return (
    <Box>
      <Typography variant={'h2'}>Performance Monitor</Typography>
      <Typography component={'p'}>
        This charter monitors performance for worker thread running concurrently
        within the webbrowser.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Line options={options} data={data} />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  )
}

export default Chart
