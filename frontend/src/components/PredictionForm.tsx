import { useState } from "react";
import { useForm } from "react-hook-form";

import api from "../api/api";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import PredictionResult from "./PredictionResult";

export default function PredictionForm() {
  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<any>(null);

  const onSubmit = async (data: any) => {
    console.log("Submitted data:", data);

    setLoading(true);

    try {
      const response = await api.post("/predict", data);
      setResult(response.data);
    } catch (error: any) {
      console.log(error.response?.data);
    }

    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl shadow p-8"
      >
        <h2 className="text-2xl font-bold mb-8">Customer Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSelect
            label="Gender"
            name="gender"
            register={register}
            options={["Male", "Female"]}
          />

          <FormSelect
            label="Senior Citizen"
            name="SeniorCitizen"
            register={register}
            options={["0", "1"]}
          />

          <FormSelect
            label="Partner"
            name="Partner"
            register={register}
            options={["Yes", "No"]}
          />

          <FormSelect
            label="Dependents"
            name="Dependents"
            register={register}
            options={["Yes", "No"]}
          />

          <FormInput
            label="Tenure"
            name="tenure"
            type="number"
            step="1"
            register={register}
          />

          <FormSelect
            label="Phone Service"
            name="PhoneService"
            register={register}
            options={["Yes", "No"]}
          />

          <FormSelect
            label="Multiple Lines"
            name="MultipleLines"
            register={register}
            options={["Yes", "No", "No phone service"]}
          />

          <FormSelect
            label="Internet Service"
            name="InternetService"
            register={register}
            options={["DSL", "Fiber optic", "No"]}
          />

          <FormSelect
            label="Online Security"
            name="OnlineSecurity"
            register={register}
            options={["Yes", "No", "No internet service"]}
          />

          <FormSelect
            label="Online Backup"
            name="OnlineBackup"
            register={register}
            options={["Yes", "No", "No internet service"]}
          />

          <FormSelect
            label="Device Protection"
            name="DeviceProtection"
            register={register}
            options={["Yes", "No", "No internet service"]}
          />

          <FormSelect
            label="Tech Support"
            name="TechSupport"
            register={register}
            options={["Yes", "No", "No internet service"]}
          />

          <FormSelect
            label="Streaming TV"
            name="StreamingTV"
            register={register}
            options={["Yes", "No", "No internet service"]}
          />

          <FormSelect
            label="Streaming Movies"
            name="StreamingMovies"
            register={register}
            options={["Yes", "No", "No internet service"]}
          />

          <FormSelect
            label="Contract"
            name="Contract"
            register={register}
            options={["Month-to-month", "One year", "Two year"]}
          />

          <FormSelect
            label="Paperless Billing"
            name="PaperlessBilling"
            register={register}
            options={["Yes", "No"]}
          />

          <FormSelect
            label="Payment Method"
            name="PaymentMethod"
            register={register}
            options={[
              "Electronic check",
              "Mailed check",
              "Bank transfer (automatic)",
              "Credit card (automatic)",
            ]}
          />

          <FormInput
            label="Monthly Charges"
            name="MonthlyCharges"
            type="number"
            step="0.01"
            register={register}
          />

          <FormInput
            label="Total Charges"
            name="TotalCharges"
            type="number"
            step="0.01"
            register={register}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Predicting..." : "Predict Customer Churn"}
        </button>
      </form>

      {result && (
        <PredictionResult
          prediction={result.prediction}
          probability={result.probability}
        />
      )}
    </>
  );
}
