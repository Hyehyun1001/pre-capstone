import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <Link to="/" className="header-link">
                    <img src="/assets/house.svg" alt="House" className="header-image" />
                </Link>
            </header>
        </>
    );
};

export default Header;
