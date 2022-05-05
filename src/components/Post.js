import React from "react";
import axios from 'axios';

function Post() {
  const handleSubmit = async(e) => {
    e.preventDefault();
    let data = {
      userId: 1,
      title:"New Post",
      body:"this is a newly added post."
    }
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts",data);
    console.log("response",response) 
  }   

  return (
    <div>
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}

export default Post;