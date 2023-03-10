import NavBar from "./NavBar"
import styles from "./MainHeader.module.css"


const MainHeader = (props) => {

    return (
        <div className={styles.mainHeader}>
            <h1 className={styles.headerText}>A Typical Page</h1>
            <NavBar isLoging={props.onAuthentication} onLogout={props.onLogout}/>
        </div>
    )
}

export default MainHeader