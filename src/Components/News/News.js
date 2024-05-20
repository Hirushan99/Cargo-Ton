import React from 'react'
import NewsCard from '../../Components/News/NewsCard'
import '../../Styles/News/News.css'
import shipImg from '../../assests/News/shipImg.jpg'
import trainImg from '../../assests/News/trainImg.jpeg'
import trainRoadImg from '../../assests/News/trainRoadImg.jpg'
import truckImg from '../../assests/News/truckImg.jpeg'

function News() {
  return (
    <div className='newsContainer'>
        <div className="newsHeader_div">
            <h1>LATEST NEWS</h1>
        </div>
        <div className="newsSubHeader_div">
            <span>INTEGER CONGUE ELITE</span>
        </div>
        <div className="newsCard_1_div">
            <NewsCard newsHeading=" CURABITUR LOREM UISM QUIS" 
                      newsBody=" Pellentesque habitant morbi tristique sene ctus netus eft malesuada fames turpis egestas.Aenean non donec ......"
                      newsImg={truckImg}
                      newsDate="26"
                      newsMonth="MAY"
                      newsAdmin="Admin"
                      noOfComments="15"
            />
        </div>
        <div className="newsCard_2_div">
            <NewsCard newsHeading=" CURABITUR LOREM UISM QUIS" 
                      newsBody=" Pellentesque habitant morbi tristique sene ctus netus eft malesuada fames turpis egestas.Aenean non donec ......"
                      newsImg={trainRoadImg}
                      newsDate="22"
                      newsMonth="MAY"
                      newsAdmin="Admin"
                      noOfComments="15"/>
        </div>
        <div className="newsCard_3_div">
            <NewsCard newsHeading=" CURABITUR LOREM UISM QUIS" 
                      newsBody=" Pellentesque habitant morbi tristique sene ctus netus eft malesuada fames turpis egestas.Aenean non donec ......"
                      newsImg={trainImg}
                      newsDate="20"
                      newsMonth="MAY"
                      newsAdmin="Admin"
                      noOfComments="15"/>
        </div>
        <div className="newsCard_4_div">
            <NewsCard newsHeading=" CURABITUR LOREM UISM QUIS" 
                      newsBody=" Pellentesque habitant morbi tristique sene ctus netus eft malesuada fames turpis egestas.Aenean non donec ......"
                      newsImg={shipImg}
                      newsDate="15"
                      newsMonth="MAY"
                      newsAdmin="Admin"
                      noOfComments="15"/>
        </div>
    </div>
  )
}

export default News