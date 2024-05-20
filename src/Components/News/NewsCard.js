import React from 'react'
import NewsAdmin from '../../Components/News/NewsAdmin'
import '../../Styles/News/NewsCard.css'

function NewsCard({newsHeading,newsBody,newsImg,newsDate,newsMonth,newsAdmin,noOfComments}) {
  return (
    <div className='newsCardContainer'>
        <div className="newsCardDate_div">
            <span>{newsDate}</span><br/>
            <span>{newsMonth}</span>
        </div>
    <div className="newsCardImg_div">
        <img src={newsImg} alt="News" />
    </div>
    <div className="newsCardHeader_div">
        <h4 className='newsCardHeader'>
            {newsHeading}
        </h4>
    </div>
    <div className="adminSection_div">
        <NewsAdmin newsAdmin={newsAdmin} noOfComments={noOfComments}/>
    </div>
    <div className="newsCardText_div">
        <span className='newsCardText'>
            {newsBody}</span>
        </div>
</div>
  )
}

export default NewsCard