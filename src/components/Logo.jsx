const Logo = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 1000 1000" 
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M500 1000c276.142 0 500-223.858 500-500S776.142 0 500 0 0 223.858 0 500s223.858 500 500 500ZM283.5 500c0-119.5 97-216.5 216.5-216.5s216.5 97 216.5 216.5-97 216.5-216.5 216.5-216.5-97-216.5-216.5Zm-67 0c0 156.5 127 283.5 283.5 283.5S783.5 656.5 783.5 500 656.5 216.5 500 216.5 216.5 343.5 216.5 500Z"
      />
    </svg>
  );
};

export default Logo; 