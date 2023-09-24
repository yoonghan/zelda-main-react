import { Box, Grid, Typography, Container } from '@mui/material'
import BullsEye from '../../components/BullsEye'
import ChartPlotter from '../../components/ChartPlotter'
import { useChartUpdater } from '../../components/ChartPlotter/useChartUpdater'
import { useCallback } from 'react'
import { type Position } from '../../components/BullsEye/type/position'

interface Prop {
  monitorEmitter?: (position: Position) => void
  debug: boolean
}

const Chart = ({ monitorEmitter, debug }: Prop) => {
  const { data: xData, append: appendX } = useChartUpdater([])
  const { data: yData, append: appendY } = useChartUpdater([])

  const emitNewPosition = useCallback(
    (position: Position) => {
      const y = position.y * -1
      const x = position.x
      appendX(x)
      appendY(y)
      if (monitorEmitter) {
        monitorEmitter({
          x,
          y,
        })
      }
    },
    [appendX, appendY, monitorEmitter]
  )

  return (
    <Container component="main" maxWidth="md" sx={{ pb: 10 }}>
      <Box>
        <Typography variant={'h2'}>Webworker monitor</Typography>
        <Typography component={'p'}>
          This charter monitors performance for worker thread running
          concurrently within the webbrowser.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BullsEye
              dimension={200}
              targetId={'target'}
              debug={debug}
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
    </Container>
  )
}

export default Chart
