import styles from "./index.module.css"
import { useNavigate } from 'react-router-dom'

interface ButtonProps {
    text: string,
    link?: string
}

const Button = ({ text, link }: ButtonProps) => {
    const navigate = useNavigate();

    const handleClick = (link?: string)=> {
        if (link) {
            navigate(link)
        } else return;
    }

    return (
        <div className={styles.btn} onClick={()=>handleClick(link)}>
            {text}
        </div>
    )
}

export default Button