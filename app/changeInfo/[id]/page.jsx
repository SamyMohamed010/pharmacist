"use client";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase";
import { collection, doc, getDoc, getDocs, where } from "firebase/firestore";
import Image from "next/image";
import { IoMdClock } from "react-icons/io";
import { GiShop } from "react-icons/gi";
import Nav from "@/components/Nav/page";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import ChangeBtn from "@/components/ChangeBtn/page";

function ChangeInfo({params}) {
    const [openNav, setOpenNav] = useState(false)
    const id = decodeURIComponent(params.id)
    const [products, setProducts] = useState([])
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    

    useEffect(() => {
        const getProductInfo = async() => {
            const productRef = doc(db, "userProducts", id)
            const productData = await getDoc(productRef)
            setProducts([{...productData.data(), id: productData.id}])
        }
        getProductInfo()
        if(typeof window !== "undefined") {
            const name = localStorage.getItem("name")
            const phone = localStorage.getItem("phone")
            if(name) {
                setUserName(name)
                setPhone(phone)
            }
        }
    }, [id, products])

    return(
        <div className="main">
            <Nav openNav={openNav} setOpenNav={setOpenNav}/>
            <Header openNav={openNav} setOpenNav={setOpenNav}/>
            {products.map(product => {
                return(
                <div className={styles.ProductContainer} key={product.id}>
                    <div className={styles.imageContainer}>
                        <Image src={product.image} width={300} height={300} alt="product image"/>
                    </div>
                    <div className={styles.productInfo}>
                        <h2>{product.name}</h2>
                        <p className={product.type === "Exchange" ? `${styles.pInfo} ${styles.active}` : `${styles.pInfo}`}>price: <strong>EGP {product.price}</strong></p>
                        <p>Descreption: <strong>{product.description}</strong></p>
                        <p className={product.type === "Exchange" ? `${styles.pInfo} ${styles.active}` : `${styles.pInfo}`}>Change With: <strong>{product.change}</strong></p>
                        <p>User Name: <strong>{product.userName}</strong></p>
                        <p>phone Number: <strong>{product.phone}</strong></p>
                    </div>
                </div>
                )
                
            })}
            <Footer/>
        </div>
    )
}

export default ChangeInfo;