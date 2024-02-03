import Links from "./links/Link";
import styles from "./navbar.module.css";
const Navbar = () => {
    return (
        <div className={styles.container}>
        
            <div>Logo</div>
            <div>
                <Links/>
            </div>
        </div>
    )
};

export default Navbar;
