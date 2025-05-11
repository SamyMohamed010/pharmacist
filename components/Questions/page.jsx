"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { IoIosArrowDown } from "react-icons/io";

function Questions() {
    const [active, setActive] = useState(false)
    const questions = [
        {
            id: 1,
            question: "How do i start online consultation with doctors on Pharacist?",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quaerat, nemo provident corrupti enim facilis similique aut iste,"
        },
        {
            id: 2,
            question: "Are your online doctor qualifed?",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quaerat, nemo provident corrupti enim facilis similique aut iste,"
        },
        {
            id: 3,
            question: "Is online doctor consultation safe and secured on Pharmacist?",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quaerat, nemo provident corrupti enim facilis similique aut iste,"
        },
        {
            id: 4,
            question: "What happens if i do not get a response from a doctor?",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quaerat, nemo provident corrupti enim facilis similique aut iste,"
        },
        {
            id: 5,
            question: "What is the online doctor consultations?",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quaerat, nemo provident corrupti enim facilis similique aut iste,"
        },
        {
            id: 6,
            question: "Can i do a free online doctor consultation on Pharamcist?",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quaerat, nemo provident corrupti enim facilis similique aut iste,"
        },
    ]
    return(
        <section className={styles.questions}>
            <div className={styles.title}>
                <h2>Got questions?</h2>
            </div>
            <div className={styles.questionsContent}>
                {questions.map((question, index) => {
                    return(
                        <div className={active === index ? `${styles.card} ${styles.active}` : `${styles.card}`} key={question.id} onClick={() => setActive(active === index ? null : index)}>
                            <div className={styles.cardHead}>
                                <h2>
                                    <span>{question.question}</span>
                                    <span><IoIosArrowDown/></span>
                                </h2>
                            </div>
                            <div className={styles.cardBody}>
                                <p>{question.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Questions;