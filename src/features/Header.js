import React from "react";

import githubIcon from "../images/githubIcon.svg";
import searchIcon from "../images/searchIcon.svg";

import styles from "../styles/Header.module.css";

function SearchForm({query="", setQuery=""}){
  return(   
    <div className={styles.form}>
      <input type="text" placeholder="Search" className={styles.searchInput} value={query} onChange={(e) => setQuery(e.target.value)}/>
      <button className={styles.searchButton}>
        <img src={searchIcon}/>
      </button>
    </div>
  )
}

function Header({query , setQuery}){
  return(
    <header className={styles.container}>
      <div className={styles.headerContent}>
        <img src={githubIcon}/>
        {/* <div > */}
        <SearchForm query={query} setQuery={setQuery}/>
        {/* </div> */}
      </div>
    </header>
  )
}


export default Header;