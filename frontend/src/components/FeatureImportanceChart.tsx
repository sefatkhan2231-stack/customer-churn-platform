import { useEffect, useState } from "react";

import api from "../api/api";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Feature {
  feature: string;

  importance: number;
}

export default function FeatureImportanceChart() {
  const [data, setData] = useState<Feature[]>([]);

  useEffect(() => {
    api
      .get("/feature-importance")

      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-5">Feature Importance</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="feature"
            angle={-25}
            textAnchor="end"
            interval={0}
            height={100}
          />

          <YAxis />

          <Tooltip />

          <Bar dataKey="importance" fill="#4f46e5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
