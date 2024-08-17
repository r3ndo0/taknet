import { SVGProps } from "react";

export function Triangle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width=".8em"
      height=".8em"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
        <path d="M4.501 10.866a1 1 0 0 1 0-1.732l10-5.769A1 1 0 0 1 16 4.231V15.77a1 1 0 0 1-1.5.866z"></path>
        <path d="M14.5 3.365a1 1 0 0 1 1.5.866V15.77a1 1 0 0 1-1.5.866l-9.999-5.769a1 1 0 0 1 0-1.732zM9.003 10L13 12.306V7.694z"></path>
      </g>
    </svg>
  );
}
