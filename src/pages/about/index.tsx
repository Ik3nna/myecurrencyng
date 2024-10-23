import React from 'react'
import styles from "./index.module.css"
import Button from '@/components/button'

const About: React.FC = () => {
  return (
    <section className={styles.about_container}>
        <div>This page is currently under construction</div>
        <Button text="Back to Home" link="/home" />
    </section>
  )
}

export default About