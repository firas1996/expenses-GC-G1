import "./ChartContainer.css";
import ChartBar from "./ChartBar";

const ChartContainer = ({ monthlyExpenses }) => {
  return (
    <div className="chart">
      {monthlyExpenses.map((item) => {
        return <ChartBar month={item.month} value={item.value} />;
      })}
    </div>
  );
};

export default ChartContainer;
