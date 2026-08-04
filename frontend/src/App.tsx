import { Route, Routes } from "react-router-dom";

import BatchPrediction from "./pages/BatchPrediction";
import Dashboard from "./pages/Dashboard";
import Model from "./pages/Model";
import Prediction from "./pages/Prediction";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/prediction" element={<Prediction />} />
      <Route path="/batch" element={<BatchPrediction />} />
      <Route path="/model" element={<Model />} />
    </Routes>
  );
}
