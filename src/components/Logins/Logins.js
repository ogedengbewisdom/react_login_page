import Card from "../UI/Card"
import styles from "./Logins.module.css"
import Button from "../UI/Button"


const Logins = () => {

    return (
       
        <Card className={styles.login}>
            <form>
                <div className={styles.control}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" />
                </div>

                <div className={styles.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>

                <div className={styles.butin}>
                    <Button type="submit" >Login</Button>
                </div>
            </form>
        </Card>
    )
}


export default Logins