import type { UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
}

export default function FormInput({
  label,
  name,
  type = "text",
  register,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">{label}</label>

      <input
        type={type}
        step={type === "number" ? "any" : undefined}
        {...register(name, {
          valueAsNumber: type === "number",
        })}
        className="border rounded-lg p-3"
      />
    </div>
  );
}
