import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

import LoadingSpinner from "../components/LoadingSpinner";
import PostCard from "../components/PostCard/PostCard";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowError, setIsShowError] = useState(false);
  const [search, setSearch] = useState('');

  const postsCollectionRef = collection(db, 'posts');
  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const data = await getDocs(postsCollectionRef)
      setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      setIsLoading(false);
    } catch (error) {
      setIsShowError(true);
    }
  }

  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchPost = (e) => {
    e.preventDefault();
    setPosts(posts.filter((post) => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase()),
      setSearch('')
    ));
  }
  
  return (
    <>
      <div>
        {isLoading ? (
          <>
            <LoadingSpinner />
          </>
        ) : (
          <div className="search-container">
            <form  className="search" onSubmit={(e) =>searchPost(e)}>
              <input type="text" className="base-input" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search here..." />
              <button type="submit" className="base-button">
                <i className="search-icon fa fa-search filter-enabled"></i>
              </button>
            </form>
          <div className="searchAndPostListContainer">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div className="card-list-container" key={post.description}>
                  <PostCard 
                    key={post.title} 
                    title={post.title} 
                    image={post.image} 
                    description={post.description} 
                  />
                </div>
              ))
            ) : (
              <div>
                <p>Oops! no posts found. Please try again...</p>
              </div>
            )}
          </div>
          </div>
        )
        }
        {isShowError === true && (
          <>
          <p>Oops! something went wrong. Please try again...</p>
          </>
        )}
      </div>
    </>
  );
}

export default Blog;
