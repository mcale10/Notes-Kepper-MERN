import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import InputForm from './InputForm';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/notes')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deletePosts(id) {
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post._id !== id);
    });
  }

  return (
    <div>
      <Header />
      <InputForm />
      <div className='container_note'>
        {posts.map((post, index) => (
          <Note
            key={index}
            id={post._id}
            title={post.title}
            content={post.content}
            onChecked={deletePosts}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;