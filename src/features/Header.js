import React from "react";

import githubIcon from "../images/githubIcon.svg";

import styles from "../styles/Header.module.css";

function SearchForm({query="", setQuery=""}){
  return(   
    <div>
      <input type="text" placeholder="Search" className={styles.searchInput} value={query} onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}

function Header({query , setQuery}){
  return(
    <header className={styles.container}>
      <div className={styles.headerContent}>
        <img src={githubIcon} alt="githubIcon"/>
        <SearchForm query={query} setQuery={setQuery}/>
      </div>
    </header>
  )
}


export default Header;