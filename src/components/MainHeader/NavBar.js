
import styles from "./NavBar.module.css"


const NavBar = () => {

    return (
        <nav className={styles.navBars}>
            <ul className={styles.navBar}>
                <li>
                    <a href="/">Users</a>
                </li>

                <li>
                    <a href="/">Admin</a>
                </li>

                <li>
                    <button className={styles.but} type="button">Logout</button>
                </li>
            </ul>
        </nav>
    )
} 


export default NavBar