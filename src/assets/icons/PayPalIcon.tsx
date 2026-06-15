const PayPalIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 8.5C19.5 12 17 14 13.5 14H12L11 20H8L8.5 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 20H4L6.5 4H12C15.5 4 17.5 6 17.5 9C17.5 12.5 15 14.5 11.5 14.5H9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PayPalIcon;
