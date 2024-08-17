import React, { useId, useState } from "react";

interface Props {
  name: string;
  value: boolean;
  valueSetter: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  label: string;
}

function Toggle({ name, value, valueSetter, className, label }: Props) {
  const id = useId();
  return (
    <div className={className}>
      <label className="flex items-center gap-1.5 cursor-pointer" htmlFor={id}>
        {label}
        <span
          className={`w-12 h-6 ease-in-out flex p-1 relative duration-300 ${
            value
              ? "bg-teal-400 hover:bg-teal-500"
              : "bg-gray-200 hover:bg-gray-300"
          } inline-block rounded-full`}
        >
          {" "}
          <span
            className={`block w-4 h-4 ease-in-out duration-500 rounded-full absolute top-1 bg-white transform ${
              value ? "translate-x-6" : ""
            }`}
          ></span>
        </span>
      </label>

      <input
        name={name}
        type="checkbox"
        onChange={(e) => valueSetter(e.target.checked)}
        className="hidden"
        id={id}
      />
    </div>
  );
}

export default Toggle;
