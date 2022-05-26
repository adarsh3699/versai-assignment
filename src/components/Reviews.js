import '../css/reviews.css';
import SectionTitle from "./SectionTitle";

function Reviews({
    reviews
}) {
    return (
        <>
            <SectionTitle 
                title={"Reviews"}
                isPagination={true} 
            />
            
            <div id='reviews'>
                {
                    reviews.map((item, index)=> (
                        <div key={index} className="reviewItem">
                            <div className='reviewUserInfo'>
                                <img src={ item.userImage } className="reviewUserImg" />
                                <div>
                                    <div className='reviewUserName'>{item.userName}</div>
                                    <div className='reviewCountry'>
                                        <img src={ item.countryFlag } className="countryFlag" />
                                        {item.country}
                                    </div>
                                </div>
                            </div>
                            
                            <div className='reviewText'>{item.review}</div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Reviews;