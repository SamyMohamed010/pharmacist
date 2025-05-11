"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/page";
import ChangeBtn from "@/components/ChangeBtn/page";
import Nav from "@/components/Nav/page";
import Header from "@/components/Header/page";

function Change() {
    const [openNav, setOpenNav] = useState(false)
    const [changeData, setChangeData] = useState([])

    useEffect(() => {
        const getAddData = async() => {
            const querySnapshot = await getDocs(collection(db, "userProducts"))
            const productsData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setChangeData(productsData)
        }
        getAddData()
    }, [])

    return (
        <div className="main">
            <Nav openNav={openNav} setOpenNav={setOpenNav}/>
            <Header openNav={openNav} setOpenNav={setOpenNav}/>
            <section className={styles.categorySction}>
                <div className={styles.categoryTitle}>
                    <h2>Exchange Products</h2>
                </div>
                <div className={styles.categoryContent}>
                    {changeData.map(product => {
                        return(
                            <div className="card">
                                <div className="cardHead">
                                    <Link href={`/changeInfo/${encodeURIComponent(product.id)}`}>
                                        <Image src={product.image} alt="testImage" fill style={{objectFit: "cover"}} />
                                    </Link>
                                </div>
                                <div className="cardBody">
                                    <p>{product.name}</p>
                                    <div className="cardContent">
                                        <ChangeBtn/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Change;