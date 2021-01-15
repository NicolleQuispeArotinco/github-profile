import React from "react";

import styles from "../styles/Info.module.css";


function Info({user}){
  console.log(user)
  return(
    <div className={styles.container}>
      {user.message ? (
        <h1>Not Found</h1>
      ):
      
      <div>
        {/* {users.map((user) => ( */}
          <li key={user.id} className={styles.userContent}>
            <div className={styles.userInfo}>
              <img src={user.avatar_url} alt={user.login} className={styles.profilePicture}/>
              {user.name ? user.name: ""} <span>@{user.login}</span> 
            </div>
            <button>
              <a href={user.html_url}>View</a>
            </button>
          </li>
        {/* ))} */}
        </div>
      }
      
    </div>
  )
}

export default Info;