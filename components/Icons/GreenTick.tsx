import { SVGProps } from "react";

export function GreenTick(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
      className="text-green-500"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
        color="currentColor"
      ></path>
    </svg>
  );
}
