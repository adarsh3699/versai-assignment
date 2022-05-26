import '../css/upcomingShows.css';
import arrowImg from "../img/arrow.svg";
import unionImg from "../img/union.svg";
import SectionTitle from "./SectionTitle";

function UpcomingShows({
    artists
}) {
    return (
        <>
            <SectionTitle 
                title={"Upcoming Shows"} 
            />

            <div id='artists'>
                {
                    artists.map((item, index) => (
                        <div key={index} className="artistItem" >
                            <img src={item.img} className="artistImg" />

                            <div className='aboutArtists'>
                                <div className='art' >{item.art}</div>
                                <div className='artistsName'>{item.name}</div>
                                <div className='Info'>
                                    <div className='moreInfo'>
                                        <div>More Info</div>
                                        <img src={arrowImg} />
                                    </div>
                                    <div className="unionImg">
                                        <img src={ unionImg } />
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default UpcomingShows;
