import "./navbar.css"
import { Link } from "react-router-dom"
export const Navbar=()=>{
    return(
        <div className="navbar">
            <div>
                <Link to="/" > <h1>Book Store</h1></Link>
            </div>
            <div>
                <Link to="/favorites" ><h3>Favorites</h3></Link>
            </div>

        </div>
    )
}