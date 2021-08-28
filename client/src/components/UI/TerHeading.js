import classes from "./TerHeading.module.scss"

const TerHeading = (props) => {
	return (
		<h2 className={`${classes.terHeading} ${props.className}`}>
			{props.children}
		</h2>
	)
}

export default TerHeading
