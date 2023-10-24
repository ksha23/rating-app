import {Link} from "react-router-dom"
import Image from "react"

const Navbar = () => {
  return (
    <header>
        <div className = "container">
            <Link to = "/">
                <h1>Dining Hall Rater</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar