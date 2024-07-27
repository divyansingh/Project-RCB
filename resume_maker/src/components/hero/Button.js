import { Link } from "react-router-dom";
import classes from "./css/button.module.css"

const Button = ({ text, secondary, path }) => {
  return (
    <Link to={path} className={secondary ? classes.secondary : ''} >
      {text}
    </Link>
  );
}
export default Button