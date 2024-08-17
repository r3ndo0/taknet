import React from "react";
import * as Slider from "@radix-ui/react-slider";
import { RedX } from "../Icons/RedX";
import { Triangle } from "../Icons/Triangle";
interface Props {
  min: number;
  max: number;
  valueSetter: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  defaultValue: number;
}
function SliderInput({
  min,
  max,

  valueSetter,
  defaultValue,
  step,
}: Props) {
  return (
    <Slider.Root
      className="relative flex items-center cursor-grab select-none mb-5 touch-none w-[250px] md:w-[300px] h-5"
      defaultValue={[defaultValue]}
      max={max}
      onValueChange={(e) => valueSetter(e[0])}
      min={min}
      step={step}
    >
      <Slider.Track className="bg-gray-200 relative grow rounded-full h-[8px]">
        <Slider.Range className="absolute bg-teal-200 rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb
        className=" w-7 flex h-7 bg-teal-500  focus:outline-none rounded-full hover:bg-teal-600 ease-in-out duration-300"
        aria-label="Volume"
      >
        <span className="m-auto flex text-gray-300">
          {" "}
          <Triangle className=" m-auto" />
          <Triangle className=" rotate-180 m-auto" />
        </span>
      </Slider.Thumb>
    </Slider.Root>
  );
}

export default SliderInput;
