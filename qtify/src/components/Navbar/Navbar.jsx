import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";



function Navbar ({ searchData }) {
    return (
        <nav className={styles.navbar}>
            <Link to href="/">
                <Logo/>
            </Link>
            <Search 
                placeholder={"Search a song of your choice"}
                searchData={searchData}
            />
            <Button>Give Feedback</Button>

        </nav>
    )


}

export default Navbar;