import classes from "./Button.module.scss"

const Button = (props) => {
	return (
		<button className={`${classes.button} ${props.className}`} onClick={props.onClick}>
			{props.children}
		</button>
	)
}

export default Button
