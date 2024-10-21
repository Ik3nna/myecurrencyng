import React from 'react'
import styles from "./index.module.css"

// assets
import logo from "@/assets/footer-logo.svg"
import gridlines from "@/assets/gridlines.png"
import line from "@/assets/line.svg"
import facebook from "@/assets/facebook.svg"
import linkedin from "@/assets/linkedin.svg"
import twitter from "@/assets/twitter.svg"
import gmail from "@/assets/google.svg"

const Footer: React.FC = () => {
    const listItem1 = ["About", "Blog", "Contact", "Jobs"];
    const listItem2 = ["Phone", "+234 708 507 3128", "Address", "16, Ogindipe Close, Upston  Close"]
    const socialIconsLists = [facebook, twitter, gmail, linkedin]
    
    return (
        <footer className={styles.footer}>
            <img src={gridlines} className={styles.gridlines} alt="gridlines" />

            <div className={styles.subContainer}>
                <img src={logo} alt="logo" />

                <section>
                    <article className={styles.row1}>
                        <div>
                            <div>Company</div>
                            <ul>
                                {listItem1.map((item, index)=>(
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <div>Contact</div>
                            <ul>
                                {listItem2.map((item, index)=>(
                                    <li key={index} className={index%2 ? styles.white_Text : ""}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </article>

                    <article>
                        <div>
                            <div>Consumer Advisory</div>
                            <ul>
                                <li>
                                    These statements have not been evaluated by the Food and Drug Administration. 
                                    This product is not intended to diagnose, treat, cure, or prevent any disease. 
                                    This product should be used only as directed on the label. All trademarks and 
                                    copyrights are property of their respective owners and not affiliated with nor 
                                    do they endorse this product. Results may vary.
                                </li>
                                <li>By using our website or product, you agree to follow our <span>terms of service.</span></li>
                            </ul>
                        </div>

                        <img src={line} alt="line" className={styles.line} />
                    </article>

                    <article>
                        <div>
                            <div>Get in Touch</div>
                            <ul>
                                <p>Feel free to get in touch with us via email</p>
                                <a href='mailto:hello@sleepstiq.com'>hello@sleepstiq.com</a>
                                <div className={styles.socials_container}>
                                    {socialIconsLists.map((item, index)=>(
                                        <SocialIcons key={index} icon={item} />
                                    ))}
                                </div>
                                <p className={styles.copy_text}>&copy; {new Date().getFullYear()}@sleepstiq. All Rights Reserved.</p>
                            </ul>   
                        </div>
                    </article>
                </section>
            </div>
        </footer>
    )
}

export default Footer


const SocialIcons = ({ icon }: { icon: string }) => {
    return (
        <div className={styles.socials}>
            <img src={icon} />
        </div>
    )
}
