import { Box, Grid, Typography } from '@mui/material'
import BullsEye from '../../components/BullsEye'
import ChartPlotter from '../../components/ChartPlotter'
import { useChartUpdater } from '../../components/ChartPlotter/useChartUpdater'
import { useCallback } from 'react'
import { type Position } from '../../components/BullsEye/type/position'

const Chart = () => {
  const { data: xData, append: appendX } = useChartUpdater([])
  const { data: yData, append: appendY } = useChartUpdater([])

  const emitNewPosition = useCallback(
    (position: Position) => {
      appendX(position.x)
      appendY(position.y)
    },
    [appendX, appendY]
  )

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
          <ChartPlotter
            data={[xData, yData]}
            labels={['X Distance', 'Y Distance']}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Chart
