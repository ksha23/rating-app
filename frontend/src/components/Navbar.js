import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
        <div className = "container">
            <Link to = "/">
                <h1>Ratings</h1>
            </Link>
            <Link to = "/halls">
                <h1>Dining Halls</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar