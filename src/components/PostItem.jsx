import { Link } from 'react-router-dom';
import './PostItem.css';

const PostItem = ({ post, onTogglePin }) => {
    return (
        <tr className="post-item">
            <td className="post-item-id" onClick={() => onTogglePin(post.id)}>
                {post.isPinned ? '📌' : post.id}
            </td>
            <td className="post-item-title">
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </td>
            <td>{post.author}</td>
            <td>{post.date}</td>
        </tr>
    );
};

export default PostItem;
