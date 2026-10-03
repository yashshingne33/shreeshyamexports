export default function Logo({ className = "", stroke = "#AF9560" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 4c8 3.5 13 10 13 16.5C33 28.5 27.2 34 20 34"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M20 11c5 2.4 8.2 6.6 8.2 10.8 0 5-4 8.8-8.2 8.8"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="20" cy="20.5" r="2.1" fill={stroke} />
    </svg>
  );
}
