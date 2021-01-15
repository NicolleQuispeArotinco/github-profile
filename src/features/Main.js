import React, {useState, useEffect} from "react";

import Header from "./Header";
import Info from "./Info";

function Main(){
  const [query, setQuery] = useState("takeo");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://api.github.com/users/${query}`
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, [query]);

  console.log(users)

  return(
    <div>
      <Header query={query} setQuery={setQuery}/>
      <Info user={users}/>
    </div>
  )
}

export default Main;