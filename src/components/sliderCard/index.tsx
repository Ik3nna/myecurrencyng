import styles from "./index.module.css"

// assets
import star from "@/assets/star.svg"

interface SlideCardProps {
    text: string,
    name: string
}

const SliderCard = ({ text, name }: SlideCardProps) => {
  return (
    <div className={styles.card}>
      <div>{text}</div>

      <div>
        <div className={styles.name}>{name}</div>
        {Array.from({ length: 5 }, (_, index)=>(
          <img key={index} src={star} alt="star" />
        ))}
      </div>
    </div>
  )
}

export default SliderCard