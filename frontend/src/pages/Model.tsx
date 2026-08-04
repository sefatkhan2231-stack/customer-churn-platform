import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import api from "../api/api";

export default function Model() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    api
      .get("/model-info")

      .then((res) => {
        setData(res.data);
      });
  }, []);

  if (!data) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Model Information</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Algorithm" value={data.algorithm} />

        <Card title="Accuracy" value={`${(data.accuracy * 100).toFixed(2)}%`} />

        <Card title="Precision" value={data.precision} />

        <Card title="Recall" value={data.recall} />

        <Card title="F1 Score" value={data.f1_score} />

        <Card title="ROC AUC" value={data.roc_auc} />

        <Card title="Training Samples" value={data.train_samples} />

        <Card title="Test Samples" value={data.test_samples} />

        <Card title="Features" value={data.features} />

        <Card title="SHAP" value={data.shap ? "Enabled" : "Disabled"} />
      </div>
    </Layout>
  );
}

function Card({
  title,

  value,
}: {
  title: string;

  value: any;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-gray-500">{title}</h3>

      <p className="text-3xl font-bold mt-3">{value}</p>
    </div>
  );
}
