import React, {useState, useEffect} from "react";

import Header from "./Header";
import Info from "./Info";

function Main(){
  const [query, setQuery] = useState("a");
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://api.github.com/users/${query}`
      );
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, [query]);
  
  return(
    <div>
      <Header query={query} setQuery={setQuery}/>
      <Info user={user} query={query}/>
    </div>
  )
}

export default Main;