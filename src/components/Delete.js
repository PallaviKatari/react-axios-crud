import React from "react";
import axios from 'axios';

function Delete() {
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
    console.log("response",response) 
  }   

  return (
    <div>
      <button onClick={handleSubmit}>Delete Post 1</button>
    </div>
  );
}

export default Delete;