import React from "react";
import styles from "./Search.moudule.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";


function Search({ placeholder })  {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className = {styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} placeholder={placeholder} required />
            <button  className={styles.searchButton} type="submit">
                <SearchIcon/>
            </button>
        </form>
    )
}

export default Search;