"use client";
import styles from "./styles.module.css";
import Header from "@/components/Header/page";
import Nav from "@/components/Nav/page";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer/page";
import Link from "next/link";
import { db } from "@/app/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import CartBtn from "@/components/CartBtn/page";

function CategoryName ({params}) {
    const [openNav, setOpenNav] = useState(false)
    const categoryName = decodeURIComponent(params.categoryName)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getAllProducts = async() => {
            const q = query(collection(db, "products"), where("type", "==", categoryName))
            const querySnapshot = await getDocs(q)
            const productsData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setProducts(productsData)
        }
        getAllProducts()
    },[categoryName])

    return (
        <div className="main">
            <Nav openNav={openNav} setOpenNav={setOpenNav}/>
            <Header openNav={openNav} setOpenNav={setOpenNav}/>
            <section className={styles.categorySction}>
                <div className={styles.categoryTitle}>
                    <h2>{categoryName} Products</h2>
                </div>
                <div className={styles.categoryContent}>
                    {products.map(product => {
                        return(
                            <div className="card">
                            <div className="cardHead">
                                <Link href={`/info/${encodeURIComponent(product.id)}`}>
                                    <Image src={product.image} alt="ProductIame" width={150} height={150} />
                                </Link>
                            </div>
                            <div className="cardBody">
                                <p>{product.name}</p>
                                <div className="cardContent">
                                    <CartBtn product={product}/>
                                    <strong>EGP {product.price}</strong>
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

export default CategoryName;