import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);

const LineChart = () => {
  let data = {
    labels: ['Credit Score', 'Debt-to-Income', 'Employment History', 'Loan Amount', 'Loan Amortixation Ratio'],
    datasets: [{
      label: '# of Votes',
      data: [19, 15, 20, 5, 18, 3],
      borderWidth: 1,
      backgroundColor: [
        'red',
        'Blue',
        'Yellow',
        'Green',
        'Purple',
        'Orange'
      ],
      borderColor: [
        'red',
        'Blue',
        'Yellow',
        'Green',
        'Purple',
        'Orange'
      ]
    }]
  }

  let options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'white' // Set the color of x-axis tick labels to white
        },
        title: {
          display: true,
          text: 'Approval Factors',
          color: 'white' // Set the color of x-axis label to white
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false
        },
        ticks: {
          color: 'white' // Set the color of y-axis tick labels to white
        },
        title: {
          display: true,
          text: 'Score',
          color: 'white' // Set the color of y-axis label to white
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white' // Set the color of legend labels to white
        }
      }
    },
    elements: {
      point: {
        backgroundColor: 'white', // Set the color of data points to white
        borderColor: 'white' // Set the color of data point borders to white
      }
    },
    tooltips: {
      mode: 'index',
      intersect: false,
      backgroundColor: 'white', // Set the tooltip background color to white
      titleFontColor: 'white', // Set the tooltip title color to black
      bodyFontColor: 'white' // Set the tooltip body color to white
    }
  }

  return (
    <div>
      <Line
        height={50}
        data={data}
        options={options}
      />
    </div>
  )
}

export default LineChart;
