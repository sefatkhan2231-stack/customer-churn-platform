import { useState } from "react";
import api from "../api/api";
import Layout from "../components/Layout";

export default function BatchPrediction() {
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<any>();

  const upload = async () => {
    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    setLoading(true);

    try {
      const response = await api.post(
        "/predict-batch",

        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setResult(response.data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Batch Prediction</h1>

      <div className="bg-white rounded-xl shadow p-8">
        <input
          type="file"
          accept=".csv"
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
        />

        <button
          onClick={upload}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded"
        >
          {loading ? "Uploading..." : "Predict CSV"}
        </button>
      </div>

      {result && (
        <div className="bg-white mt-8 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">Prediction Summary</h2>

          <p>
            Total Customers:
            {result.total_records}
          </p>

          <p>
            Predicted Churn:
            {result.churn_predictions}
          </p>

          <a
            href={`http://127.0.0.1:8000${result.download_url}`}
            className="inline-block mt-5 bg-green-600 text-white px-5 py-3 rounded"
          >
            Download CSV
          </a>
        </div>
      )}
    </Layout>
  );
}
