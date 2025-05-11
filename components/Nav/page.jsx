"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";

function Nav({openNav, setOpenNav}) {
    const [login, setLogin] = useState(false)
    const [name, setName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [categorieLinks, setCategorieLinks] = useState([
        {
            id: 1,
            text: "Medicines",
        },
        {
            id: 2,
            text: "Hair care",
        },
        {
            id: 3,
            text: "Skin care",
        },
        {
            id: 4,
            text: "Makeup",
        },
        {
            id: 5,
            text: "Vitamins",
        },
        {
            id: 6,
            text: "Baby Food",
        },
    ])
    
    const handleCloseNav = () => {
        setOpenNav(false)
    }
    useEffect(() => {
        if(typeof window !== "undefined") {
            const email = localStorage.getItem("email")
            const userName = localStorage.getItem("name")
            if(userName) {
                setName(userName)
            }
            if(email) {
                setUserEmail(email)
                setLogin(true)
            }else {
                setLogin(false)
            }
        }
    }, [])

    return(
        <nav className={openNav ? `${styles.nav} ${styles.open}` : `${styles.nav}`}>
            <div className={styles.top}>
                {login ? 
                    <h2>Welcome: {name}</h2>
                    :
                    <Link href={"/login"} className={styles.loginLink}>
                        <span><IoPersonOutline/></span>
                        <span>Login</span>
                    </Link>
                }
                <button onClick={handleCloseNav}><IoIosCloseCircleOutline/></button>
            </div>
            <hr />
            <div className={styles.homeContainer}>
                <Link href={"/"} className={styles.homeLink}>
                    <span><FiHome/></span>
                    <span>Home</span>
                </Link>
                {login ? 
                    <Link href={`/user/${encodeURIComponent(userEmail)}`} className={styles.homeLink}>
                        <span><GrNotes/></span>
                        <span>Account</span>
                    </Link> :
                    ""
                }
            </div>
            <hr />
            <div className={styles.categories}>
                <div className={styles.title}>
                    <h2>categories</h2>
                </div>
                <ul>
                    {categorieLinks.map(link => {
                        return (
                            <li key={link.id}>
                                <Link href={`/product/${encodeURIComponent(link.text)}`} className={styles.categorieLink}>
                                    <span>{link.text}</span>
                                    <span><IoIosArrowForward/></span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;