import '../css/bar.css';
import homejamLogo from "../img/homejam.png"
import searchIcon from "../img/search.png"
import cartIcon from "../img/cart.svg"

function Bar() {
  return (
    <div id='navBar'>
        <img src={ homejamLogo } />
        <div id='menu'>
            <div id="search"><img src={ searchIcon } />Search</div>
            <div>Help</div>
            <div>Account</div>
            <div><img src={ cartIcon } /></div>
        </div>
    </div>
  );
}

export default Bar;
