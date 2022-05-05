import React from "react";
import axios from 'axios';

function Put() {
  const handleSubmit = async(e) => {
    e.preventDefault();
    let data = {
      userId: 1,
      title:"New Post updated",
      body:"this is a newly updated post."
    }
    const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1",data);
    console.log("response",response) 
  }   

  return (
    <div>
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
}

export default Put;