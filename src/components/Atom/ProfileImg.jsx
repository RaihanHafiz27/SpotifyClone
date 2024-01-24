import { Link } from "react-router-dom";

export function ProfileImg(props) {
  const { img, rounded, className } = props;
  return (
    <Link to="/login">
      <img src={img} alt="" className={`w-6 h-6 ${rounded} ${className}`} />
    </Link>
  );
}
