import React from "react";
import styles from './PostCard.module.scss';

const PostCard = ({image, title, description}) => {
  
  return (
    <div className={styles.cardContainer}>
      <div className={styles.item}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} />
        </div>
        <h1>{title.length > 40 ? title.slice(0, 40) + '...' : title}</h1>
        <p>{description.length > 250 ? description.slice(0, 250) + '...' : description}</p>
      </div>
    </div>
  )
}

export default PostCard;
