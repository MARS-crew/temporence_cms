// ** React Imports
import { useEffect } from 'react'

// ** Chart Imports
import ApexCharts from 'apexcharts'

interface Props {
  data: { date: string; count: number }[]
}

const BarChart = ({ data }: Props) => {
  useEffect(() => {
    const options = {
      series: [
        {
          name: '고객 현황',
          data: data.map((item) => item.count),
        },
      ],
      chart: {
        height: 500,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          return val
        },
        offsetY: -60,
        style: {
          fontSize: '15px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        categories: data.map((item) => item.date),
        position: 'bottom',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: number) {
            return val
          },
        },
      },
    }

    const chart = new ApexCharts(document.querySelector('#chart'), options)
    chart.render()

    return () => {
      chart.destroy()
    }
  }, [data])

  return <div id="chart" />
}

export default BarChart
