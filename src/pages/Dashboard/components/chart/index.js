import { Bar } from "react-chartjs-2";

// const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      type: "line",
      label: "Net",
      backgroundColor: "#FFE854",
      borderColor: "#FFE854",
      borderWidth: 2,
      data: [100, 70, 30, 40, 50, 100]
    },
    {
      type: "bar",
      label: "Net",
      backgroundColor: "#37b04c",
      data: [100, 70, 30, 40, 50, 100],
      borderColor: "white",
      borderWidth: 2,
      options: {}
    },
    {
      type: "bar",
      label: "Gross",
      backgroundColor: "#289e45",
      data: [10, 10, 10, 10, 10, 10],
      borderColor: "white",
      borderWidth: 2,
      options: {}
    }
  ]
};
const options = {
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: "#FFF",
      bodyColor: "#000",
      borderColor: "#FFE854",
      borderWidth: "1"
    }
  },
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
    }
  }
};
const MultiType = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default MultiType;
