import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutJS() {
  const data = {
    labels: ["Remaining", "Spent so far"],
    datasets: [
      {
        label: "Pool",
        data: [3, 4],
        backgroundColor: ["black", "red"],
        borderColor: ["black", "red"],
      },
    ],
  };

  const options = {};

  return (
    <div className="Chart col-sm">
      <div style={{ width: "35%", height: "35%", margin: "auto" }}>
        <Doughnut data={data} options={options}></Doughnut>
      </div>
    </div>
  );
}

export default DoughnutJS;
