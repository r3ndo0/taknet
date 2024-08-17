import React, { useId, useState } from "react";
import * as Switch from "@radix-ui/react-switch";

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
    <div className={className} onClick={() => console.log("clicked")}>
      <label className="flex items-center gap-1.5 cursor-pointer" htmlFor={id}>
        {label}
        {/* <span
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
        </span> */}
      </label>
      <Switch.Root
        onCheckedChange={(e) => valueSetter(e)}
        className="w-[52px] h-[25px]  rounded-full relative  bg-gray-300  data-[state=checked]:bg-teal-500 outline-none cursor-default"
        id={id}
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full   transition-transform duration-300 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[29px]" />
      </Switch.Root>
    </div>
  );
}

export default Toggle;
