import React, { useState } from 'react'
import styles from "./index.module.css"
import Container from '@/components/container'
import { IoIosSearch } from "react-icons/io";
import { faqData } from '@/data';

interface FAQProps {
    id: string,
    question: string,
    answer: string,
    isOpen: boolean;
    onToggle: () => void;
}

const Faqs: React.FC = () => {
    const [inputValue, setInputValue] = useState("");
    const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setExpandedFAQ(prev => (prev === id ? null : id));
    };

    return (
        <section>
            <article className={styles.faq_container}>
                <Container className="faqs_hero">
                    <p>We're here to help you</p>
                    <h3>How can we assist?</h3>
                    <div className={styles.input_container}>
                        <IoIosSearch size={30} color='#2C3E50' />
                        <input 
                            placeholder='Search FAQs here'
                            value={inputValue}
                            onChange={(e)=>setInputValue(e.target.value)}
                        />
                    </div>
                </Container>
            </article>

            <article className={styles.subContainer}>
                <div>
                    <div>Sleepstiq <span>Product</span></div>
                    <div>Order</div>
                    <div>Melantonin</div>
                </div>

                <div>
                    {faqData.map((item)=>(
                        <React.Fragment key={item.id}>
                            {item.id === "Q1" && <hr />}

                            <FAQ 
                                id={item.id} 
                                question={item.question}
                                answer={item.answer}
                                isOpen={expandedFAQ === item.id}
                                onToggle={() => handleToggle(item.id)}
                            /><hr />
                        </React.Fragment>
                    ))}
                </div>
            </article>
        </section>
    )
}

export default Faqs

const FAQ = ({ id, question, answer, isOpen, onToggle }: FAQProps) => {
    return (
        <section onClick={onToggle}>
            <div className={`${styles.question} ${isOpen && styles.active_question}`}>{id}: {question}</div>

            {isOpen && (
                <div className={styles.answer}>{answer}</div>
            )}
        </section>
    )
}