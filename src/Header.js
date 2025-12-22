import "./Header.css"
import banner from "./images/restaurantbanner.jpg"

export default function Header() {

    return (
        <header>
            <div className="hero-bubble" >
            
            
                <div className="hero-section">

                    <div className="hero-container">

                        <div className="hero-description">

                            <h1 className="hero-title">Little Lemon</h1>
                            <h2 className="hero-city">Chicago</h2>
                            <p className="hero-paragraph">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                            <button className="reserve-button">Reserve a Table</button>
                        </div>

                        <div>
                            <img className="banner" src={banner} />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}