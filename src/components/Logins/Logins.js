import Card from "../UI/Card"
import styles from "./Logins.module.css"
import Button from "../UI/Button"
import { useEffect, useState } from "react"


const Logins = (props) => {

    const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredPassword, setEnteredPassword] = useState("")
    const [validEmail, setValidEmail] = useState()
    const [validPassword, setValidPassword] = useState()
    const [validForm, setInvalidForm] = useState(false)

    useEffect( () => {
        const identifier = setTimeout(() => {
            setInvalidForm(enteredEmail.includes("@") && enteredPassword.trim().length > 6)
        },500)

        return () => {
            clearTimeout(identifier)
        }
    }, [enteredEmail, enteredPassword])

    const enteredEmailHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const enteredPasswordHandler = (event) => {
        setEnteredPassword(event.target.value)
    }

    const checkEmailValidity = (event) => {
        setValidEmail(event.target.value.includes("@"))
    }

    const checkPasswordValidity = (event) => {
        setValidPassword(event.target.value.trim() > 6)
    }


    const submitHandler = (event) => {
        event.preventDefault()
        props.onLogin(enteredEmail, enteredPassword)
    }

    return (
       
        <Card className={styles.login}>
            <form onSubmit={submitHandler}>
                <div className={`${styles.control} ${validEmail === false ? styles.invalid : ""}`}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" onChange={enteredEmailHandler} value={enteredEmail} onBlur={checkEmailValidity} />
                </div>

                <div className={`${styles.control} ${validPassword === false ? styles.invalid : ""}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={enteredPasswordHandler} value={enteredPassword} onBlur={checkPasswordValidity} />
                </div>

                <div className={styles.butin}>
                    <Button type="submit" disabled={!validForm}>Login</Button>
                </div>
            </form>
        </Card>
    )
}


export default Logins