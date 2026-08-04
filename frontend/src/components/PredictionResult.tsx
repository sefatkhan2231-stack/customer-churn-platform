interface Props {
  prediction: string;

  probability: number;
}

export default function PredictionResult({
  prediction,

  probability,
}: Props) {
  const percent = (probability * 100).toFixed(1);

  return (
    <div className="bg-white rounded-xl shadow border p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Prediction Result</h2>

      <div className="space-y-5">
        <div>
          <p className="font-medium">Churn Probability</p>

          <div className="w-full bg-gray-200 rounded-full h-5 mt-2">
            <div
              className={`h-5 rounded-full ${
                prediction === "Yes" ? "bg-red-500" : "bg-green-500"
              }`}
              style={{
                width: `${percent}%`,
              }}
            />
          </div>

          <p className="mt-2 text-lg">{percent}%</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            {prediction === "Yes"
              ? "⚠ Customer is likely to churn"
              : "✅ Customer is likely to stay"}
          </h3>
        </div>
      </div>
    </div>
  );
}
