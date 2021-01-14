import React from "react";

import githubIcon from "../images/githubIcon.svg";
import searchIcon from "../images/searchIcon.svg";

import styles from "../styles/Header.module.css";

import { Formik, Form, Field} from "formik";

function SearchForm(){
  return(
    <Formik>    
      <Form className={styles.form}>
        <Field type="text" placeholder="Search" className={styles.searchInput}/>
        <button className={styles.searchButton}>
          <img src={searchIcon}/>
        </button>
      </Form>
    </Formik>
  )
}

function Header(){
  return(
    <header className={styles.container}>
      <div className={styles.headerContent}>
        <img src={githubIcon}/>
        {/* <div > */}
        <SearchForm/>
        {/* </div> */}
      </div>
    </header>
  )
}


export default Header;