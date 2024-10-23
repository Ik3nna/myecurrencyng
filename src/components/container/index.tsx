import React from 'react'
import styles from "./index.module.css"
import homeStyles from "@/pages/home/index.module.css"
import shopStyles from "@/pages/shop/index.module.css"
import faqStyles from "@/pages/faqs/index.module.css"

interface ContainerProps {
  children: React.ReactNode, 
  className: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`
      ${styles.container} 
      ${shopStyles[className]} 
      ${faqStyles[className]}
      ${homeStyles[className]}
    `}>
      {children}
    </div>
  )
}

export default Container