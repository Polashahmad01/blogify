import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";


const CreatePost = () => {
  const [input, setInput] = useState({
    title: '',
    image: '',
    description: ''
  });


  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const postsCollectionRef = collection(db, 'posts');
  const navigate = useNavigate();

  const handleClick = async () => {

    if(!input.title || !input.image || !input.description) {
      return
    }

    await addDoc(postsCollectionRef, input);
    navigate('/blog');
  }

  return (
    <div className="create-post-container">
      <h1>Create a new post</h1>
      <div className="input-group">
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          placeholder="Title"
          name="title"
          value={input.title}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="image">Upload Image</label>
        <input 
          type="input" 
          placeholder="Image url"
          value={input.image}
          name="image"
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="description">Description</label>
        <textarea 
          name="description" 
          placeholder="descripton text"
          value={input.description}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <button onClick={handleClick}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
