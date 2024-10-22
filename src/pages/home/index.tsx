import React from 'react'
import styles from "./index.module.css"
import Button from '@/components/button'
import { sliderList } from '@/data'
import Container from '@/components/container'
import { FaCaretRight } from "react-icons/fa";

//assets
import jamesMiller from "@/assets/james_miller.svg"

const Home: React.FC = () => {
    
    return (
        <section className={styles.wrapper}>
            <article className={styles.hero_section}>
                <div className={styles.main_container}>
                    <Container className="container">
                        <p>We're here to help you</p>
                        <h3>Relax & Rest</h3>
                        <p>
                            With the aid of our Melatonin Sleepstiq, we can 
                            assure you that you can get quality sleep.
                        </p>
                        <Button text='Visit Shop' link='/shop' />
                    </Container>

                    <div className={styles.slider}>
                        <div className={styles.slideTrack}>
                            {sliderList.map((item)=>(
                            <div className={styles.slide}>
                                <img src={item} />
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            <article>
                <Container className='customers'>
                    <div className={styles.customer_info}>
                        <div>Our Amazing Story</div>
                        <h5>10k+ Happ<span>y Customers</span></h5>
                        <div>
                            There’s no secret sauce, no wizard behind the curtain. What makes 
                            Aerolab tick is an interdisciplinary team with a framework that 
                            fosters candid collaboration.
                        </div>
                        <div><FaCaretRight /> More know About us</div>
                    </div>

                    <div className={styles.customer_card}>
                        <div>
                            I’m a very anxious person but use this and feel so relaxed and sleep 
                            way better now with the aid of sleepstiq. 
                        </div>

                        <div>
                            <img src={jamesMiller} alt="james" />
                            <div>
                                <div>James Miller</div>
                                <div>CEO, Techbias</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </article>

            <article>
                
            </article>
        </section>
    )
}

export default Home