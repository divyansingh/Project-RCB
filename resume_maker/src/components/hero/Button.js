import classes from "./css/button.module.css"

const Button=({ text, secondary })=> {
  return (
    <button className={secondary ? classes.secondary : ''}>
      {text}
    </button>
  );
}
export default Button