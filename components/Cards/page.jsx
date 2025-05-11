'use client';
import { useEffect } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function Cards() {
    const cards = [
        {
            id: 1,
            text: "Meternal Health and Comfort",
            offer: "5%"
        },
        {
            id: 2,
            text: "Headache and Migrainge Solutions",
            offer: "10%"
        },
        {
            id: 3,
            text: "Cold and Flu Relief",
            offer: "20%"
        },
    ]
    const color = ['#fb923c', '#60a5fa', '#fcd34d']

    useEffect(() => {
        gsap.fromTo(`.${styles.card}`, {x: 200, opacity: 0}, {
            x: 0,
            opacity: 1,
            stagger: .2,
            duration: 1,
            scrollTrigger: {
                trigger: `.${styles.card}`,
                start: "top 20%"
            }
        })
    }, [])

    return(
        <section className={styles.cardsContainer}>
            {cards.map((card, index) => {
                return(
                    <div className={styles.card} key={card.id} style={{backgroundColor: color[index % color.length]}}>
                        <div className={styles.cardHead}>
                            <h2>{card.text}</h2>
                        </div>
                        <div className={styles.cardBody}>
                            <p>{card.offer}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Cards;