export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
               BLOOM<span>SHOP</span>
            </div>

            <ul className="nav-links">
                <li>Contact</li>
            </ul>

            <div className="search-box">
                <input type="text" placeholder="Search products..." />
            </div>

            <div className="nav-buttons">
                <button className="signin-btn">Sign In</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </nav>
    );
}