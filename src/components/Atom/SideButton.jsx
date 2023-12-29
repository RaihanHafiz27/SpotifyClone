import { Link } from "react-router-dom";

export function SideBtn(props) {
  const {
    icon,
    children = "Button",
    font = "font-bold",
    className,
    text = "text-slate-400",
    hvr = "hover:text-slate-200",
    to = "#",
  } = props;
  return (
    <Link
      to={to}
      className={`flex items-center ${font} ${text} ${hvr} ${className}`}
      type="submit"
    >
      {icon}
      {children}
    </Link>
  );
}
