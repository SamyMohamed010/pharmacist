"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../public/images/logo-removebg-preview.png"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.top}>
                    <div className={styles.topcontent}>
                        <div className={styles.linkContainer}>
                            <div className={styles.content}>
                                <strong>Company</strong>
                                <p>What Is New</p>
                                <p>About</p>
                                <p>Press</p>
                                <p>Careers</p>
                                <p>Social Good</p>
                                <p>Contact</p>
                            </div>
                            <div className={styles.content}>
                                <strong>Community</strong>
                                <p>Pharmacist For Business</p>
                                <p>2025 Creator Report</p>
                                <p>Charities</p>
                                <p>Creator Profile Directory</p>
                                <p>Explor Templates</p>
                            </div>
                            <div className={styles.content}>
                                <strong>Support</strong>
                                <p>Help Topics</p>
                                <p>Getting Started</p>
                                <p>Linktree Pro</p>
                                <p>Features</p>
                                <p>FAQs</p>
                                <p>Report a Violation</p>
                            </div>
                            <div className={styles.content}>
                                <strong>Trust & Legal</strong>
                                <p>Terms & Conditions</p>
                                <p>Privacy Notice</p>
                                <p>Cookie Notice</p>
                                <p>Trust Center</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.socialContainer}>
                        <Link href={"/"} className={styles.socialLinks}><FaFacebookF/></Link>
                        <Link href={"/"} className={styles.socialLinks}><FaInstagram/></Link>
                        <Link href={"/"} className={styles.socialLinks}><FaXTwitter/></Link>
                        <Link href={"/"} className={styles.socialLinks}><FaLinkedinIn/></Link>
                    </div>
                </div>
                <div className={styles.middle}>
                    <Image src={logoImage} alt="logoImage" className={styles.logoImage} />
                    <Link href={"/"} className={styles.footerLink}>Pharmacist</Link>
                </div>
                <div className={styles.bottom}>
                    <p>&copy;2025 - Pharamcist</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;