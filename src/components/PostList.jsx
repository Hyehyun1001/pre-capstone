import { useState } from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import './PostList.css';

const PostList = ({ posts }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredPosts = posts.filter(post =>
        post.title.includes(searchTerm) || post.content.includes(searchTerm)
    );

    return (
        <div className="post-list-container">
            <div className="header-title">게시판</div>
            <table className="post-list">
                <thead>
                <tr>
                    <th className="th-no">No</th>
                    <th className="th-title">제목</th>
                    <th className="th-author">글쓴이</th>
                    <th className="th-time">작성시간</th>
                </tr>
                </thead>
                <tbody>
                {filteredPosts.map(post => (
                    <PostItem key={post.id} post={post}/>
                ))}
                </tbody>
            </table>

            <div className="post-list-actions">
                <input
                    type="text"
                    placeholder="serch"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="post-list-search"
                />
                <Link to="/create" className="post-list-create-button">
                    글쓰기
                </Link>
            </div>
        </div>
    );
};

export default PostList;
