import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './PostCreate.css';

const PostCreate = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
       if (title.trim() === '' || content.trim() === '') {
            alert('제목과 내용을 모두 입력하세요.');
            return;
        }
        onSubmit({title, content});
        navigate('/');
    };

    return (
        <form className="post-create" onSubmit={handleSubmit}>
            <div className="post-create-box">
                <div className="post-create-field">
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="post-create-field">
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="post-create-actions">
                <button type="button" onClick={() => navigate('/')}>취소</button>
                <button type="submit">등록</button>
            </div>
        </form>
    );
};

export default PostCreate;
