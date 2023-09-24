import { type ChartData } from 'chart.js'

export const coloring = [
  { border: 'rgb(255, 99, 132)', background: 'rgba(255, 99, 132, 0.5)' },
  { border: 'rgb(99, 255, 132)', background: 'rgba(99, 255, 132, 0.5)' },
]

const drawDataSet = (data: number[][], labels: string[]) =>
  data.map((dataset, index) => ({
    label: labels[index],
    data: dataset,
    borderColor: coloring[index].border,
    backgroundColor: coloring[index].background,
    borderWidth: 1,
    pointStyle: 'cross',
  }))

export const writeData = (
  data: number[][],
  labels: string[]
): ChartData<'line', number[], string> => {
  if (data.length === 0 || data.length !== labels.length) {
    console.warn(
      `data is empty or data(${data.length}) != labels(${labels.length}).`
    )
    return { datasets: [], labels: [] }
  }
  return {
    datasets: drawDataSet(data, labels),
    labels: data[0].map((_, index) => `${index}`),
  }
}
