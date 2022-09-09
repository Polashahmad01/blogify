import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import './App.scss';
import Blog from './pages/Blog';
import CreatePost from './pages/CreatePost';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <nav className='nav'>
            <div>
              <Link className='logo' to="/blog">Blogify</Link>
            </div>
            <div>
              <Link to="/blog">Blogs</Link>
              <Link to="/create-post">Create Post</Link>
            </div>
          </nav>
        </div>
        <div className="app-container">
          <Routes>
            <Route path='/' element={<Navigate replace to="/blog"/>} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/create-post' element={<CreatePost />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
