import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <div className="homepage__header">
            <div className="homepage__header__logo"><Link to="/">✈︎ ✈️ JetSetGo</Link></div>
            <div className="homepage__header__items">
                <div className="homepage__header__item"><Link to="/about">About Us</Link></div>
                <div className="homepage__header__item"><Link to="/contact">Contact Us</Link></div>
            </div>
        </div>
    )
};

export default Header;