"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../public/images/logo-removebg-preview.png"
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { HiMiniBars3 } from "react-icons/hi2";
import { GrNotes } from "react-icons/gr";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Header({openNav, setOpenNav}) {
    const [login, setLogin] = useState(false)
    const [userEmail, setUserEmail] = useState('') 
    const router = useRouter()

    const handleOpenNav = () => {
        setOpenNav(true)
    }

    useEffect(() => {
        if(typeof window !== "undefined") {
            const email = localStorage.getItem("email")
            if(email) {
                setUserEmail(email)
                setLogin(true)
            }else {
                setLogin(false)
            }
        }
    }, [])

    return(
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.leftSide}>
                    <div className={styles.logoInfo}>
                        <div className={styles.logoImage}>
                            <Image src={logoImage} fill  style={{objectFit: "cover"}} alt="logoImage" />
                        </div>
                        <Link href={"/"} className={styles.logoLink}>pharmacist</Link>
                        <p> | </p>
                    </div>
                    <div className={styles.mobileIcons}>
                        {login ? 
                            <Link href={userEmail === 'admin' ? "/admin/products" : `/user/${encodeURIComponent(userEmail)}`} className={styles.headerLinks}>
                                <span><GrNotes/></span>
                            </Link>
                            :
                            <Link href={"/login"} className={styles.headerLinks}>
                                <span><BsPerson/></span>
                            </Link>
                        }
                        <Link href={"/cart"} className={styles.headerLinks}>
                            <span><LuShoppingCart/></span>
                        </Link>
                    </div>
                </div>
                <div className={styles.middleSide}>
                    <input type="text" placeholder="Search here for your product" onChange={() => router.push("/search")}/>
                    <p><CiSearch/></p>
                </div>
                <div className={styles.container}>
                    <div className={styles.inputContainer}>
                        <input type="text"  placeholder="Search here for your product" onChange={() => router.push("/search")}/>
                        <p><CiSearch/></p>
                    </div>
                    <button onClick={handleOpenNav}><HiMiniBars3/></button>
                </div>
                <div className={styles.rightSide}>
                    {login ? 
                        <Link href={userEmail === 'admin' ? "/admin/products" : `/user/${encodeURIComponent(userEmail)}`} className={styles.headerLinks}>
                            <span><GrNotes/></span>
                            <span>account</span>
                        </Link>
                        :
                        <Link href={"/login"} className={styles.headerLinks}>
                            <span><BsPerson/></span>
                            <span>login</span>
                        </Link>
                    }
                    <Link href={"/cart"} className={styles.headerLinks}>
                        <span><LuShoppingCart/></span>
                        <span>cart</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;