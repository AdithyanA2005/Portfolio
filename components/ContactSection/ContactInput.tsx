import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { ContactFormValues } from "@/utils/forms/contact/typings";

type Props = {
  type: "text" | "email" | "textarea";
  name: keyof ContactFormValues;
  label: string;
  placeholder: string;
  control: Control<ContactFormValues>;
  rules: Record<string, unknown>;
  errors: FieldErrors<ContactFormValues>;
};

export default function ContactInput({ type, control, name, label, placeholder, rules, errors }: Props) {
  const inputParams = {
    placeholder: placeholder,
    className: `${errors[name]
      ? "border-red-500 border-opacity-70"
      : "border-transparent"
      } block w-full p-2.5 border-2 rounded-md text-white bg-black bg-opacity-40 placeholder-gray-300 outline-none focus:ring-yellow-500 focus:border-yellow-500 transition-all
    `,
  };

  return (
    <div className="relative z-0 w-full">
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue=""
        render={({ field }) => (
          <>
            <label className="block mb-1.5 text-sm font-medium text-gray-300">{label}</label>
            {type === "textarea"
              ? <textarea {...field} {...inputParams} rows={5} />
              : <input type={type} {...field} {...inputParams} />
            }

            {/* Error message */}
            <span className="text-xs text-red-500 border-opacity-70 tracking-wider italic">
              {errors[name]?.message}
            </span>
          </>
        )}
      />
    </div>
  );
}

