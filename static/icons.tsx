import React from "react";

export const Check: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Win">
          <circle id="Oval" fill="#3AA757" cx="8" cy="8" r="8" />
          <polygon
            id="Path"
            fill="#FFFFFF"
            fillRule="nonzero"
            points="6.4 9.76 4.32 7.68 3.2 8.8 6.4 12 12.8 5.6 11.68 4.48"
          />
        </g>
      </g>
    </svg>
  );
};

export const Cancel: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Loss">
          <circle id="Oval" fill="#EA4335" cx="8" cy="8" r="8" />
          <polygon
            id="Path"
            fill="#FFFFFF"
            transform="translate(8.000000, 8.000000) rotate(-315.000000) translate(-8.000000, -8.000000) "
            points="12 8.8 8.8 8.8 8.8 12 7.2 12 7.2 8.8 4 8.8 4 7.2 7.2 7.2 7.2 4 8.8 4 8.8 7.2 12 7.2"
          />
        </g>
      </g>
    </svg>
  );
};
