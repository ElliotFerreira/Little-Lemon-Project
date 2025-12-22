import logo from "./images/logo.svg"
import './Nav.css'


export default function Nav(){
    return (
        <nav className="navbar">

            <img src={logo} alt="Logo" className="logo"></img>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}