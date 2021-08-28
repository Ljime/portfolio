import classes from './Input.module.scss'

const Input = (props) => {
    return (
        <>
        <label className={classes.label} htmlFor={props.id}>{props.id}</label>
        <input className={`${classes.input} ${props.className}`}
            onChange={props.onChange}
            value={props.value}
            id={props.id}
        ></input>
        </>
    )
} 

export default Input