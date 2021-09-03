import classes from './Contact.module.scss'
import { forwardRef, useState } from 'react'
import SubHeading from '../components/UI/SubHeading'
import Input from '../components/Form/Input'
import TextArea from '../components/Form/TextArea'
import Button from '../components/UI/Button'
import handshake from '../assets/handshake.png'
import useInput from '../hooks/useInput'
import axios from 'axios'
import Spinner from '../components/UI/Spinner'
import TerHeading from '../components/UI/TerHeading'
const Contact = forwardRef((props,ref) => {
    const {value: emailValue,
         onChangeHandler: emailOnChangeHandler} = useInput()
    const {value: subjectValue,
         onChangeHandler: subjectOnChangeHandler} = useInput()
    const {value: messageValue,
         onChangeHandler: messageOnChangeHandler} = useInput()

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(false)
        setSuccess(false)

        const response = await axios.post('/send-email', {
            email: emailValue,
            subject: subjectValue,
            message: messageValue
        })

        if(response.data.error) {
            setError(true)
        } else {
            setSuccess(true)
        }
        setLoading(false)
    }
    return (
        <section ref={ref} className={classes.contact}>
            <SubHeading>Contact Me</SubHeading>
            <div className={classes.formContainer}>
                <div className={classes.bubble}>
                    <img src={handshake} alt="Handshake"></img>
                </div>
                <form onSubmit={onSubmitHandler} className={classes.form}>
                    <Input
                        value={emailValue}
                        onChange={emailOnChangeHandler}
                        id="Email"
                    ></Input>
                    <Input
                        value={subjectValue}
                        onChange={subjectOnChangeHandler}
                        id="Subject"
                    ></Input>
                    <TextArea
                        value={messageValue}
                        onChange={messageOnChangeHandler}
                        id="Message"
                    ></TextArea>
                    {loading ? <Spinner></Spinner> : <Button>Send</Button>}
                    {success && <TerHeading className={classes.message}>Successfully Sent!</TerHeading>}
                    {error && <TerHeading className={classes.message}>Error! ;c</TerHeading>}
                </form>
            </div>
        </section>
    )
})

export default Contact