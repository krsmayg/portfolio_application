import React, { PureComponent } from 'react';
import classes from "./style.module.scss";
import Chart from 'chart.js'
const data = [
  {
    label: "SQL",
    value: 4
  },
  {
    label: "MongoDb",
    value: 6
  },
  {
    label: "C#",
    value: 3
  },
  {
    label: "React",
    value: 7
  },

  {
    label: "TypeScript",
    value: 5
  },
  {
    label: "NodeJS",
    value: 6
  },
  {
    label: "Angular",
    value: 2
  },

]

class SkillsChart extends PureComponent {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  // componentDidUpdate() {
  //   this.myChart.data.labels = data.map(d => d.label);
  //   this.myChart.data.datasets[0].data = data.map(d => d.value);
  //   this.myChart.update();
  // }
  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'radar',
      options: {
	      scale: {
          angleLines: {
              display: true
          },
          ticks: {
              suggestedMin: 0,
              suggestedMax: 10,
              backdropColor: 'transparent',
          },
          pointLabels: {
            fontSize: 14,
        },
      }
      },
      data: {
        labels: data.map(d => d.label),
        datasets: [{
          label: '2020',
          data: data.map(d => d.value),
          backgroundColor: "#f39c1259",
          borderColor: '#f39c12', 
        }]
      }
    });

  }
  render() {
    return <canvas ref={this.canvasRef} className={classes.chart} />;
  }
}
 
export default SkillsChart;