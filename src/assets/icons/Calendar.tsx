// icon:calendar | Feathericons https://feathericons.com/ | Cole Bemis
import * as React from "react";

function IconCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M5 4 H19 A2 2 0 0 1 21 6 V20 A2 2 0 0 1 19 22 H5 A2 2 0 0 1 3 20 V6 A2 2 0 0 1 5 4 z" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default IconCalendar;
