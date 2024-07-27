import React from "react"
import './likebutton.css'
import { FaRegHeart, FaHeart, FaShareAlt } from 'react-icons/fa';
const GRAPHIC = 'https://react.semantic-ui.com/images/avatar/large/matthew.png';

const ImageCard=()=>{
    const [like ,setLike]=React.useState(false)
const handleLike=()=>{
    // api call to like the image
    setLike(!like)
}
    return (
        <div className="card">
      <img
        src={GRAPHIC}
        alt="Person Image"
      />
      <div className="actions">
      <button className={`action-button like ${like ? 'liked' : ''}`} onClick={handleLike}>
          {like ? <FaHeart /> : <FaRegHeart  />}
        </button>
        <button className="action-button">
          <FaShareAlt />
        </button>
      </div>
    </div>
    )
}

export default ImageCard