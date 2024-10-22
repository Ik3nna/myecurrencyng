import React from 'react'
import styles from "./index.module.css"
import Button from '@/components/button'
import { sliderData, sliderList, reviewsData } from '@/data'
import Container from '@/components/container'
import { FaCaretRight } from "react-icons/fa";
import SliderCard from '@/components/sliderCard'

//assets
import jamesMiller from "@/assets/james_miller.svg"
import sleepstiq from "@/assets/sleepstiq.png"
import missionImg from "@/assets/mission_picture.png"
import ReviewsCard from '@/components/reviewsCard'

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
                        <div><FaCaretRight /> Know more About us</div>
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

            <article className={styles.card_container}>
                {sliderData.map((item)=>(
                    <SliderCard 
                        key={item.id}  
                        text={item.text}
                        name={item.name}
                    />
                ))}
            </article><hr />

            <div className={styles.shop_container}>
                <div>
                    <img src={sleepstiq} alt="sleepstiq" />
                    <div className={styles.sleepstiq_info}>
                        😊  Promotes calm and relaxation.<br />
                        💤  Inhalation allows for a rapid effect.<br />
                        ✅  100% drug-free, plant-based ingredients.<br />
                        ‍⚕️  3rd-party lab tested.
                    </div>
                </div>

                <div>
                    <h5>Shop Now</h5>
                    <div>
                        Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, 
                        lavender, and chamomile. A few breaths of our plant-based essential oil mist will 
                        mellow you out, quiet the mind, and lull you to bed.
                    </div>
                    <Button text="Visit Shop" link='/shop' />
                </div>
            </div>

            <article className={styles.mission_container}>
                <div>
                    <h5>Our Mission</h5>
                    <div>
                        We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, 
                        just like you, deal with stress, unease, and trouble sleeping from a number of 
                        silly things like school, work, screens, numbers, and people. That's why we created 
                        products that aim to - 
                    </div>
                    <div>
                    ✓ Promote Calm <br />
                    ✓ Support Sleep <br />
                    ✓ Reduce Stress <br />
                    ✓ Aid Relaxation
                    </div>
                </div>
                <img src={missionImg} alt="mission" />
            </article>

            <article className={styles.visit_shop}>
                <h5>Visit Our Shop</h5>
                <div>
                    Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, 
                    and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet 
                    the mind, and lull you to bed.
                </div>
                <Button text="Visit Shop" link='/shop' />
            </article>

            <article /><hr />

            <div className={styles.reviews_container}>
                <h5>Product Reviews</h5>
                <div>
                    {reviewsData.map((item)=>(
                        <ReviewsCard 
                            key={item.id}
                            text={item.text}
                            img={item.img}
                            name={item.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home