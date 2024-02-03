import Links from "./links/Link";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="container">
        
            <div>Logo</div>
            <div>
                <Links/>
            </div>
        </div>
    )
};

export default Navbar;