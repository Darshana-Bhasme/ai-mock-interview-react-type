import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to="/" aria-label="Home">
      <img 
        src="/assets/svg/logo.svg"  // Ensure this file is inside `public/`
        alt="Company Logo"
        className="w-10 h-10 object-contain"
      />
    </Link>
  );
};
