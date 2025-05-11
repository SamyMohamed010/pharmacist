"use client";

import Header from "@/components/Header/page";
import Nav from "@/components/Nav/page";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";
import styles from "./styles.module.css";
import Image from "next/image";
import { IoMdClock } from "react-icons/io";
import { GiShop } from "react-icons/gi";
import Footer from "@/components/Footer/page";
import CartBtn from "@/components/CartBtn/page";

function ProductInfo({params}) {
    const [openNav, setOpenNav] = useState(false)
    const productInfo = decodeURIComponent(params.productInfo)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProductInfo = async() => {
            const productRef = doc(db, "products", productInfo)
            const productData = await getDoc(productRef)
            setProducts([{...productData.data(), id: productData.id}])
        }
        getProductInfo()
    }, [productInfo,products])

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
                        <p>Price: <strong>{product.price} EGP</strong></p>
                    </div>
                    <div className={styles.informations}>
                        <div className={styles.infoItems}>
                            <p>
                                <span><IoMdClock/></span>
                                <span>Delivery Time : </span>
                            </p>
                            <strong>Within One To Two Hours</strong>
                        </div>
                        <hr />
                        <div className={styles.infoItems}>
                            <p>
                                <span><GiShop/></span>
                                <span>Sold By : </span>
                            </p>
                            <strong>The Nearest Pharmacy</strong>
                        </div>
                    </div>
                    <CartBtn product={product}/>
                </div>
                )
            })}
            <Footer/>
        </div>
    )
}

export default ProductInfo;