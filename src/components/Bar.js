import '../css/bar.css';
import homejamLogo from "../img/homejam.png"
import searchIcon from "../img/search.svg"
import cartIcon from "../img/cart.svg"
import HamburgerIcon from "../img/Hamburger.svg"

function Bar() {
    return (
        <div id='navBar'>
            <img src={ homejamLogo } />
            <div id='webMenu'>
                <div id="search"><img src={ searchIcon } />Search</div>
                <div>Help</div>
                <div>Account</div>
                <div><img src={ cartIcon } /></div>
            </div>

            <div id='mobileMenu'>
                <img src={ searchIcon } id="searchIcon" />
                <img src={ cartIcon } id="cartIcon" />
                <img src={ HamburgerIcon } />
            </div>
        </div>
    );
}

export default Bar;
