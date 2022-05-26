import '../css/content.css';
import heartIcon from "../img/heart.svg";
import CalendarIcon from "../img/Calendar.svg";
import userImg from "../img/user.png";
import countryImg from "../img/country.png";
import backgroundImg from "../img/background.png";
import bennyDayalImg from "../img/bennyDayal.png";
import vijayYesudasImg from "../img/vijayYesudas.png";
import andreaJeremiahImg from "../img/andreaJeremiah.png";
import shilpaRaoImg from "../img/shilpaRao.png";

import UpcomingShows from "./UpcomingShows";
import Reviews from "./Reviews";

const lebel = [{isHeart: true}, {isHeart: false}, {isHeart: false}, {isHeart: false}]
const reviews = [
    {
        userName: "Hellen Jummy",
        userImage: userImg,
        country: "Palo Alto, CA",
        countryFlag: countryImg,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing"
    },
    {
        userName: "Isaac Oluwatemilorun",
        userImage: userImg,
        country: "Palo Alto, CA",
        countryFlag: countryImg,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing"
    },
    {
        userName: "Adarsh Suman",
        userImage: userImg,
        country: "India",
        countryFlag: countryImg,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing"
    }
];
const artists = [
    { img: bennyDayalImg, name: "Benny Dayal", art: "Folk" },
    { img: vijayYesudasImg, name: "Vijay Yesudas", art: "Folk" },
    { img: andreaJeremiahImg, name: "Andrea Jeremiah", art: "Bollywood" },
    { img: shilpaRaoImg, name: "Shilpa Rao", art: "Folk" }
];

function Content() {
    return (
        <div id='content'>
            <img src={ backgroundImg } id='backgroundImg' />

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
            
            <UpcomingShows
                artists={artists}
            />
            <Reviews
                reviews={reviews}
            />
            <br /><br />
        </div>
    );
}

export default Content;
