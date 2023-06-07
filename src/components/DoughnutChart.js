import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { AppContext } from "../context/AppContext";
import totalExpenses from "./ExpensesTotal";
import BalanceInput from "./BalanceInput";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutJS(props) {
  const { expenses, balance } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  const test = balance - totalExpenses;

  const data = {
    labels: ["Remaining", "Spent so far"],
    datasets: [
      {
        label: "£",
        data: [test.toString(), totalExpenses.toString()],
        backgroundColor: ["#b7e70a", "#019587"],
        borderColor: ["#b7e70a", "#019587"],
      },
    ],
  };

  const options = {};

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = "bolder 30px sans-serif";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return (
    <div className="Chart col-sm">
      <div style={{ width: "35%", height: "35%", margin: "auto" }}>
        <Doughnut
          data={data}
          options={options}
          plugins={[textCenter]}
        ></Doughnut>
      </div>
    </div>
  );
}

export default DoughnutJS;
