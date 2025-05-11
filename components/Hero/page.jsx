'use client';
import styles from "./styles.module.css";
import doctorImage from '../../public/images/doctor.PNG';
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";

function Hero() {
    const logoRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(logoRef.current, {y: 40, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 1})
    }, [])

    return(
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.title}>
                    <h1 ref={logoRef}>Pharmacist</h1>
                </div>
                <div className={styles.heroText}>
                    <p>Online medicine delivery is the process <br /> of ordering medication through a website <br /> or app and have them delivered to your doorstep</p>
                </div>
                <div className={styles.heroIcons}>
                    <p>
                        <span><CiDeliveryTruck/></span>
                        <span>Delivery to <br /> your doorstep</span>
                    </p>
                    <p>
                        <span><MdOutlineLocalOffer/></span>
                        <span>100% genuine <br /> medicines</span>
                    </p>
                </div>
                <Image src={doctorImage} alt="doctorImage" className={styles.doctorImage} />
            </div>
        </section>
    )
}

export default Hero;