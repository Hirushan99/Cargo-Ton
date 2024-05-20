import React from 'react'
import '../../Styles/News/NewsAdmin.css'
import chatBox from '../../assests/News/chatBox.png'

function NewsAdmin({newsAdmin,noOfComments}) {
  return (
    <div className='newsAdminContainer'>
        <div className="newsAdminUser_div">
            <span>
                {newsAdmin}
            </span>
        </div>
        <div className="newsAdminChatBoxImg_div">
            <img src={chatBox} alt="Chat Box" />
        </div>
        <div className="newsAdminNumberOfComments_div">
            <span>
                {noOfComments}
            </span>
        </div>
    </div>
  )
}

export default NewsAdmin