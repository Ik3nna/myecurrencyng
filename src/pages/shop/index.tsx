import React, { useState } from 'react'
import styles from "./index.module.css"
import Container from '@/components/container'
import Button from '@/components/button'
import { sliderData } from '@/data'
import SliderCard from '@/components/sliderCard'

// assets
import sleepstiq from "@/assets/sleepstiq.png"

const Shop: React.FC = () => {
    const [inputValue, setInputValue] = useState("2");

    return (
        <section className={styles.main_container}>
            <article className={styles.hero_section}>
                <Container className="container1">
                    <p>We're here to help you</p>
                    <h3>Relax & Rest</h3>    
                </Container>
            </article>

            <article className={styles.sleepstiq_container}>
                <img src={sleepstiq} alt="sleepstiq" />

                <div className={styles.product_deets}>
                    <h5>About Product</h5>
                    <div>
                        Our Personal Diffuser is an aromatherapy device that contains a blend of 
                        melatonin, lavender, and chamomile. A few breaths of our plant-based 
                        essential oil mist will mellow you out, quiet the mind, and lull you to bed.
                    </div>
                    <div>
                        😊  Promotes calm and relaxation.<br />
                        💤  Inhalation allows for a rapid effect.<br />
                        ✅  100% drug-free, plant-based ingredients.<br />
                        ‍⚕️  3rd-party lab tested.
                    </div>
                    <div className={styles.price_container}>
                        <div>
                            <div>Price</div>
                            <div>Unit</div>
                        </div>
                        <div>
                            <div>USD 50</div>
                            <input 
                                type="number" 
                                min={0} 
                                value={inputValue}
                                onChange={(e)=>setInputValue(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button text="Buy" />
                </div>
            </article> <hr />

            <article className={styles.card_container}>
                {sliderData.map((item)=>(
                    <SliderCard 
                        key={item.id}  
                        text={item.text}
                        name={item.name}
                    />
                ))}
            </article>
        </section>
  )
}

export default Shop