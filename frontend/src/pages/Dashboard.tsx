import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import StatCard from "../components/StatCard";

import FeatureImportanceChart from "../components/FeatureImportanceChart";

import ModelComparisonChart from "../components/ModelComparisonChart";

import api from "../api/api";

import type { ModelInfo } from "../types/model";

import {
  MdAnalytics,
  MdPeople,
  MdTrendingUp,
  MdVerified,
} from "react-icons/md";

export default function Dashboard() {
  const [modelInfo, setModelInfo] = useState<ModelInfo>();

  const loading = modelInfo === undefined;

  useEffect(() => {
    api
      .get("/model-info")

      .then((res) => {
        setModelInfo(res.data);
      })

      .catch(console.error);
  }, []);

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Customer Churn Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Accuracy"
          value={loading ? "..." : `${(modelInfo!.accuracy * 100).toFixed(2)}%`}
          icon={MdVerified}
          color="bg-green-600"
        />

        <StatCard
          title="ROC-AUC"
          value={loading ? "..." : modelInfo!.roc_auc.toFixed(3)}
          icon={MdTrendingUp}
          color="bg-blue-600"
        />

        <StatCard
          title="Customers"
          value={loading ? "..." : String(modelInfo!.total_customers)}
          icon={MdPeople}
          color="bg-purple-600"
        />

        <StatCard
          title="Churn Rate"
          value={loading ? "..." : `${modelInfo!.churn_rate}%`}
          icon={MdAnalytics}
          color="bg-red-600"
        />
      </div>

      <div className="grid xl:grid-cols-2 gap-8 mt-10">
        <FeatureImportanceChart />

        <ModelComparisonChart />
      </div>
    </Layout>
  );
}
