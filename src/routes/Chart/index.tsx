import { Box, Grid, Typography } from '@mui/material'
import BullsEye from '../../components/BullsEye'
import ChartPlotter from '../../components/ChartPlotter'

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const Chart = () => {
  return (
    <Box>
      <Typography variant={'h2'}>Webworker monitor</Typography>
      <Typography component={'p'}>
        This charter monitors performance for worker thread running concurrently
        within the webbrowser.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BullsEye dimension={200} targetId={'target'} debug={true} />
        </Grid>
        <Grid item xs={12}>
          <ChartPlotter data={data} labels={labels} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Chart
