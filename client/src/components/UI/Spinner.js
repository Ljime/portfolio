import classes from './Spinner.module.scss'

const Spinner = (props) => {
    return (
        <div
            className={`${classes.spinner} ${props.className}`}
        >
        </div>
    )
}

export default Spinner