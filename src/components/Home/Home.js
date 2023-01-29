import React from "react";
import Card from "../UI/Card";
import styles from "./Home.module.css"


const Home = (props) => {

    return (
        <Card>
            <h1 className={styles.home}>Welcome back!</h1>
        </Card>
    )
}


export default Home