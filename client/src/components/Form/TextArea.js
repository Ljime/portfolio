import classes from "./TextArea.module.scss"

const TextArea = (props) => {
	return (
		<>
			<label className={classes.label} htmlFor={props.id}>
				{props.id}
			</label>
			<textarea
				className={`${props.className} ${classes.textarea}`}
				onChange={props.onChange}
				value={props.value}
				id={props.id}
			></textarea>
		</>
	)
}

export default TextArea
