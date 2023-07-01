// icon:arrows_hamburger1 | Linea Iconset https://linea.io/ | Benjamin Sigidi
import * as React from "react";

function IconArrowsHamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M0 21h6M16 21h48M0 33h6M16 33h48M0 45h6M16 45h48"
      />
    </svg>
  );
}

export default IconArrowsHamburger;
