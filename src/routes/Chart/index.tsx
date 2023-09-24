import { Box, Grid, Typography } from '@mui/material'
import BullsEye from '../../components/BullsEye'
import ChartPlotter from '../../components/ChartPlotter'
import { useChartUpdater } from '../../components/ChartPlotter/useChartUpdater'
import { useCallback } from 'react'

const Chart = () => {
  const { data } = useChartUpdater([])

  const emitNewPosition = useCallback(() => {}, [])

  return (
    <Box>
      <Typography variant={'h2'}>Webworker monitor</Typography>
      <Typography component={'p'}>
        This charter monitors performance for worker thread running concurrently
        within the webbrowser.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BullsEye
            dimension={200}
            targetId={'target'}
            debug={true}
            emitNewPosition={emitNewPosition}
          />
        </Grid>
        <Grid item xs={12}>
          <ChartPlotter data={data} label={'Distance from target'} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Chart
