import type { IconType } from "react-icons";

interface StatCardProps {
  title: string;
  value: string;
  icon: IconType;
  color: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-2">{value}</h2>
        </div>

        <div className={`${color} text-white p-4 rounded-xl`}>
          <Icon size={30} />
        </div>
      </div>
    </div>
  );
}
