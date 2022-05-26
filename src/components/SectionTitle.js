import '../css/sectionTitle.css';

import leftArrowImg from "../img/leftArrow.svg";
import rightArrowImg from "../img/rightArrow.svg";

function SectionTitle({
    title,
    isPagination
}) {
    return (
        <div className='sectionTitle'>
            <div>
                <div className='sectionTitleText'>{title}</div>
                <div className='sectionTitleBorder'></div>
            </div>
            
            
            {
                isPagination ?
                    <div className='paginationContent'>
                        <span className='activePage'>1</span>
                        <span>/12</span>
                        <img src={leftArrowImg} className="leftArrow" />
                        <img src={rightArrowImg} />
                    </div>
                :
                    <div className='viewAllBtn'>View All</div>
            }
        </div>
    );
}

export default SectionTitle;