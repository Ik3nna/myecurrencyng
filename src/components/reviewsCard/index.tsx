import styles from "./index.module.css"

// assets
import star from "@/assets/star.svg"

interface ReviewsCardProps {
    img: string,
    text: string,
    name: string
}

const ReviewsCard = ({ img, text, name}: ReviewsCardProps) => {
  return (
    <div className={styles.card}>
        <div>
            <img src={img} alt="product" />
            <div>{text}</div>
        </div>
        
        <div>
            <div className={styles.name}>{name}</div>
            {Array.from({ length: 5 }, (_, index)=>(
                <img key={index} src={star} alt="star" />
            ))}
        </div>
    </div>
  )
}

export default ReviewsCard