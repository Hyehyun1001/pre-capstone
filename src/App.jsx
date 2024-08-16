import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostCreate from './components/PostCreate';
import './App.css';

const App = () => {
    const [posts, setPosts] = useState([
        // 더미 데이터
        { id: 1, title: '첫 번째 게시물', content: '내용 1', author: '이혜현', date: '2024-08-15' },
        { id: 2, title: '두 번째 게시물', content: '내용 2', author: '이혜현', date: '2024-08-16' },
    ]);

    const addPost = (post) => {
        const newPost = {
            ...post,
            id: posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1, // 새로운 ID 생성
            author: '이혜현',
            date: new Date().toISOString().split('T')[0],
        };
        setPosts([newPost, ...posts]);

        console.log('새 게시물:', newPost);
        console.log('업데이트된 게시물 목록:', posts);
    };

    const updatePost = (updatedPost) => {
        setPosts(posts.map(post =>
            post.id === updatedPost.id ? { ...post, ...updatedPost } : post
        ));

        console.log('수정된 게시물:', updatedPost);
        console.log('업데이트된 게시물 목록:', posts);
    };

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<PostList posts={posts} />} />
                    <Route
                        path="/post/:id"
                        element={
                            <PostDetail
                                posts={posts}
                                onUpdate={updatePost}
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
