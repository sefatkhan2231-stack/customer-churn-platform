import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ModelComparisonChart() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch("https://customer-churn-platform-wg9x.onrender.com/report")
      .then((res) => res.json())
      .then((data) =>
        setModels(
          data.map((item: any) => ({
            model: item.Model,
            score: item.Accuracy,
          })),
        ),
      );
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border">
      <h2 className="text-lg font-bold mb-5">Model Comparison</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={models}>
          <XAxis
            dataKey="model"
            angle={-25}
            textAnchor="end"
            interval={0}
            height={100}
          />
          <YAxis domain={[0.6, 0.9]} />
          <Tooltip />
          <Bar dataKey="score" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
