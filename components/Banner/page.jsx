'use client';
import styles from "./styles.module.css";
import doctorImage from "../../public/images/bannerImage.PNG"
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

function Banner() {
    const bannerRef = useRef(null)
    useEffect(() => {
        gsap.fromTo(bannerRef.current, {y: 50, opacity: 0}, {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: bannerRef.current,
                start: "top 60%",
            }
        })
    }, [])

    return(
        <section className={styles.bannerContainer}>
            <div ref={bannerRef} className={styles.banner}>
                <div className={styles.leftSide}>
                    <div className={styles.text}>
                        <h2>Do not have a prescription?</h2>
                        <p>Upload only jpg, png or pdf files size limit is 15 mg</p>
                    </div>
                    <button>Contact a doctor</button>
                </div>
                <div className={styles.rightSide}>
                    <Image src={doctorImage} alt="doctorImage" className={styles.doctorImage} />
                </div>
            </div>
        </section>
    )
}

export default Banner;