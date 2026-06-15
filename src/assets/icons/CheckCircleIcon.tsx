interface CheckCircleIconProps {
  className?: string;
  tickColor?: string;
}

const CheckCircleIcon = ({ className, tickColor = "#0D6F22" }: CheckCircleIconProps) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9.08333 17.4167C13.6667 17.4167 17.4167 13.6667 17.4167 9.08333C17.4167 4.5 13.6667 0.75 9.08333 0.75C4.5 0.75 0.75 4.5 0.75 9.08333C0.75 13.6667 4.5 17.4167 9.08333 17.4167Z"
      fill="#EFFFB2"
      stroke="#EFFFB2"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.375 9.08333L8.29167 11L11.7917 7.5"
      stroke={tickColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckCircleIcon;
