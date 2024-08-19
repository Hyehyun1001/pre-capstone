import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostCreate from './components/PostCreate';
import './App.css';

const App = () => {
    const [posts, setPosts] = useState([
        { id: 2, title: '두 번째 게시물', content: '내용 2', author: '이혜현', date: '2024-08-16', isPinned: false },
        { id: 1, title: '첫 번째 게시물', content: '내용 1', author: '이혜현', date: '2024-08-15', isPinned: false },
    ]);

    const addPost = (post) => {
        const newPost = {
            ...post,
            id: posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1,
            author: '이혜현',
            date: new Date().toISOString().split('T')[0],
            isPinned: false,
        };
        setPosts([newPost, ...posts]);
    };

    const updatePost = (updatedPost) => {
        const updatedDate = new Date().toISOString().split('T')[0];
        setPosts(posts.map(post =>
            post.id === updatedPost.id ? { ...post, ...updatedPost, date: updatedDate } : post
        ));
    };

    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    const togglePin = (id) => {
        setPosts(posts.map(post =>
            post.id === id ? { ...post, isPinned: !post.isPinned } : post
        ).sort((a, b) => b.isPinned - a.isPinned || b.id - a.id));
    };

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<PostList posts={posts} onTogglePin={togglePin} />} />
                    <Route
                        path="/post/:id"
                        element={
                            <PostDetail
                                posts={posts}
                                onUpdate={updatePost}
                                onDelete={deletePost}
                            />
                        }
                    />
                    <Route
                        path="/create"
                        element={
                            <PostCreate
                                onSubmit={addPost}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
