import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export function ChevronDownIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapPinIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size + 2}
      viewBox="0 0 16 18"
      fill="none"
      className={className}
    >
      <g opacity="1">
        <path
          d="M8.07553 17.0223C7.92593 17.1297 7.74639 17.1875 7.5622 17.1875C7.37802 17.1875 7.19848 17.1297 7.04888 17.0223C2.62235 13.8671 -2.0755 7.37724 2.67369 2.68764C3.97748 1.4051 5.75061 0.5 7.5622 0.5C9.37379 0.5 11.147 1.4051 12.4507 2.68764C17.1999 7.37724 12.5021 13.8671 8.07553 17.0223Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function DiamondIcon({ className, size = 21 }: IconProps) {
  return (
    <svg
      width={size}
      height={size + 1}
      viewBox="0 0 21 22"
      fill="none"
      className={className}
    >
      <path
        d="M10.0312 0L20.0572 11.0014L10.0312 22.0029L0.00525116 11.0014L10.0312 0Z"
        fill="currentColor"
      />
      <path
        d="M20.0572 11.0014L10.0312 22.0029L0.00525138 11.0014L10.0312 0L20.0572 11.0014ZM0.89458 11.0014L10.0312 1.25474L19.1679 11.0014L10.0312 20.7481L0.89458 11.0014Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M4 10H16M16 10L11 5M16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
