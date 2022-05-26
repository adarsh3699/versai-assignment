import '../css/content.css';
import heartIcon from "../img/heart.svg"
import CalendarIcon from "../img/Calendar.svg"
// import cartIcon from "../img/cart.png"

const lebel = [{isHeart: true}, {isHeart: false}, {isHeart: false}, {isHeart: false}]

function Content() {
  return (
    <div id='content'>
        <div id='cari'>Cari Cari</div>
        <div id='cariText'>
            Live from their sofa to yours. Get closer to your favorite <br />
            artists, and never miss out.
        </div>

        <div id='lebel'>
            {
                lebel.map((item, index)=> (
                    <div key={index} className="lebelItem" >
                        <img src={ item.isHeart? heartIcon : CalendarIcon } className="lebelImg" />
                        <div className='lebelNo'>0</div>
                        <div className='lebelText'>lebel</div>
                    </div>
                ))
            }
        </div>
        
    </div>
  );
}

export default Content;
