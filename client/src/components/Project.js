import classes from './Project.module.scss'
import TerHeading from './UI/TerHeading'
import Button from './UI/Button'
import { ReactComponent as Github } from "../assets/SVG/github.svg"
import { ReactComponent as TV } from "../assets/SVG/tv.svg"
import Label from './Label'

const Project = (props) => {
    return (
        <div className={classes.project}>
            <div className={classes.imgContainer}>
                <img src={props.image} alt='Project'></img>
            </div>
            <div className={classes.info}>
                <TerHeading>{props.title}</TerHeading>
                <div className={classes.labelContainer}>
                    {props.labels.map((label) => <Label key={label}>{label}</Label>)}
                </div>
                <p>{props.desc}</p>
                <div className={classes.buttonContainer}>
                    <a href={props.github} target='_blank' rel='noreferrer'>
                        <Button>GitHub <Github/></Button>
                    </a>
                    <a href={props.server} target='_blank' rel='noreferrer'>
                     <Button>Live Server <TV/></Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project