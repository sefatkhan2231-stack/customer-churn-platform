import { NavLink } from "react-router-dom";

import { MdAnalytics, MdDashboard } from "react-icons/md";

export default function Sidebar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-5 py-3 rounded-lg transition

        ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`;

  return (
    <aside className="w-72 bg-white border-r">
      <div className="p-8">
        <h1 className="text-2xl font-bold">ChurnAI</h1>

        <p className="text-gray-500">Customer Churn Platform</p>
      </div>

      <nav className="px-4 space-y-3">
        <NavLink to="/" className={linkClass}>
          <MdDashboard size={24} />
          Dashboard
        </NavLink>

        <NavLink to="/prediction" className={linkClass}>
          <MdAnalytics size={24} />
          Prediction
        </NavLink>

        {/* <NavLink to="/batch" className={linkClass}>
          <MdUploadFile size={24} />
          Batch Prediction
        </NavLink>

        <NavLink to="/model" className={linkClass}>
          <MdModelTraining size={24} />
          Model
        </NavLink> */}
      </nav>
    </aside>
  );
}
