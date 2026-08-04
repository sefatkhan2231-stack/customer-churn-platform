import type { UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  options: string[];
  register: UseFormRegister<any>;
}

export default function FormSelect({ label, name, options, register }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">{label}</label>

      <select
        {...register(name)}
        className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
