"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger)

function Categorie({categories, setCategories}) {
    const colors = ['#fbbf24','#60a5fa', '#fb923c', '#c084fc', '#fcd34d', '#fca5a5']
    
    useEffect(() => {
        gsap.fromTo(`.${styles.card}`, {y: 40, opacity: 0}, {
            y: 0,
            opacity: 1,
            stagger: .2,
            duration: 1,
            scrollTrigger: {
                trigger: `.${styles.card}`,
                start: "top 80%",
            }
        })
    }, [])

    return(
        <section className={styles.categorie}>
            {categories.map((categorie, index) => {
                return(
                    <div className={styles.card} key={categorie.id}>
                        <div className={styles.cardHead} style={{backgroundColor: colors[index % colors.length]}}>
                            <Image src={categorie.image} className={styles.categorieImage} alt="categoryImage"/>
                        </div>
                        <div className={styles.cardBody}>
                            <Link className={styles.cardLink} href={`/product/${categorie.text}`}>{categorie.text}</Link>
                        </div>
                    </div>
                )
            })}
            <div className={styles.card}>
                <div className={styles.cardHead} style={{backgroundColor: '#fbbf24'}}>
                    <p><MdOutlinePublishedWithChanges/></p>
                </div>
                <div className={styles.cardBody}>
                    <Link className={styles.cardLink} href={'/change'}>Exchange</Link>
                </div>
            </div>
        </section>
    )
}

export default Categorie;