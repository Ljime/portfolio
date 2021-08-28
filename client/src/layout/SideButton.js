import classes from "./SideButton.module.scss"
import { Transition } from "react-transition-group"
const SideButton = (props) => {
	return (
		<Transition in={props.in} unmountOnExit mountOnEnter timeout={200}>
			{(state) => (
				<div
					onClick={props.onClick}
					className={`${classes.sidebutton} ${
						state === "exiting" && classes.exiting
					}`}
				>
					<div className={props.showSideBar ? classes.line1Open : classes.line1Close}></div>
					<div className={props.showSideBar ? classes.line2Open : classes.line2Close}></div>
					<div className={props.showSideBar ? classes.line3Open : classes.line3Close}></div>
				</div>
			)}
		</Transition>
	)
}

export default SideButton
