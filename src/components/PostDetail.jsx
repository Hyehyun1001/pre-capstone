import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = ({ posts, onUpdate, onDelete }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const currentPost = posts.find(post => post.id === parseInt(id));
        if (currentPost) {
            setPost(currentPost);
            setTitle(currentPost.title);
            setContent(currentPost.content);
        }
    }, [id, posts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '' || content.trim() === '') {
            alert('제목과 내용을 모두 입력하세요.');
            return;
        }
        onUpdate({ id: post.id, title, content });
        setEditMode(false);
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm("이 게시물을 삭제하시겠습니까?");
        if (confirmDelete) {
            onDelete(post.id);
            navigate('/');
        }
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleCancel = () => {
        setEditMode(false);
        if (post) {
            setTitle(post.title);
            setContent(post.content);
        }
    };

    if (!post) return <p>게시물이 존재하지 않습니다.</p>;

    return (
        <div className="post-detail">
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <div className="post-detail-box">
                        <div className="post-detail-field">
                            <label htmlFor="title">제목</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="post-detail-field">
                            <label htmlFor="content">내용</label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="post-detail-actions">
                        <button className="cancel-button" type="button" onClick={handleCancel}>취소</button>
                        <button type="submit">수정</button>
                    </div>
                </form>
            ) : (
                <>
                    <div className="post-detail-box">
                        <h2 className="post-detail-title">{post.title}</h2>
                        <div className="post-detail-meta">
                            <span>{post.date}</span> | <span>{post.author}</span>
                        </div>
                        <hr className="post-detail__divider"/>
                        <p className="post-detail-content">{post.content}</p>
                    </div>
                    <div className="post-detail-actions">
                        <button type="button" onClick={handleEditClick}>수정</button>
                        <button className="delete-button" type="button" onClick={handleDelete}>삭제</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default PostDetail;
