import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Get.css";

function Get() {
  const [users , setUsers] = useState([]);
  useEffect(()=>{
    const fetchData = async() => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data)
    }
    fetchData();
  },[])

  return (
    <div>
      <h1>List of Users</h1>
      {users.map(item=>(<li>{item.name}<br></br>{item.email}<br></br>{item.address.city}</li>))}
    </div>
  );
}

export default Get;