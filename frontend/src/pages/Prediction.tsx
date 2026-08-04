import Layout from "../components/Layout";
import PredictionForm from "../components/PredictionForm";

export default function Prediction() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Customer Prediction</h1>

      <PredictionForm />
    </Layout>
  );
}
