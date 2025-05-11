"use client";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
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

    useEffect(() => {
        const getProductInfo = async() => {
            const productRef = doc(db, "userProducts", id)
            const productData = await getDoc(productRef)
            setProducts([{...productData.data(), id: productData.id}])
        }
        getProductInfo()
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
                        <p>Descreption: <strong>{product.description}</strong></p>
                    </div>
                    <ChangeBtn/>
                </div>
                )
                
            })}
            <Footer/>
        </div>
    )
}

export default ChangeInfo;