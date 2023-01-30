
import styles from "./NavBar.module.css"


const NavBar = (props) => {

    return (
        <nav className={styles.navBars}>
            <ul className={styles.navBar}>
            {props.isLoging && (<li>
                    <a href="/">Users</a>
                </li>)}

                {props.isLoging && (<li>
                    <a href="/">Admin</a>
                </li>)}

                {props.isLoging &&(<li>
                    <button className={styles.but} onClick={props.onLogout}>Logout</button>
                </li>)}
            </ul>
        </nav>
    )
} 


export default NavBar