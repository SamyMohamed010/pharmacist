"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { db } from "@/app/firebase";
import { collection, deleteDoc, doc, getDocs, onSnapshot } from "firebase/firestore";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Products() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([
    {
        id: 1,
        text: "Medicines",
    },
    {
        id: 2,
        text: "Hair Care",
    },
    {
        id: 3,
        text: "Skin Care",
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
    {
        id: 7,
        text: "Deals",
    },
    ])

    useState(() => {
        const unSubscribe = onSnapshot(collection(db, 'products'), (querySnapshot) => {
            const productsArray = []
            querySnapshot.forEach((doc) => {
                productsArray.push({...doc.data(), id: doc.id})
            })
            setProducts(productsArray)
        })
        return () => unSubscribe()
    }, [])

    const handleDelete = async(id) => {
        const delValue = doc(collection(db, "products"), id)
        await deleteDoc(delValue)
    }

    return(
        <div className="main">
            <header className={styles.header}>
                <div className={styles.leftSide}>
                    <Link href={"/"} className={styles.headerLink}><MdKeyboardArrowLeft/></Link>
                </div>
                <div className={styles.middleSide}>
                    <h2>Products</h2>
                </div>
                <div className={styles.rightSide}>
                    <Link href={"/"} onClick={() => typeof window !== "undefined" ? localStorage.removeItem("email") : ""} className={styles.headerLink}><RiLogoutCircleLine/></Link>
                </div>
            </header>
            {categories.map(categorie => {
                return(
                <div key={categorie.id} className={styles.categorie}>
                    <div className={styles.title}>
                        <h2>{categorie.text}</h2>
                    </div>
                <Swiper
                spaceBetween={20}
                slidesPerView={1.5}
                breakpoints={{
                    640: {slidesPerView: 1.5},
                    768: {slidesPerView: 1.5},
                    1024: {slidesPerView: 5}
                }}
                >
                    {products.filter(product => product.type === categorie.text).map(product => {
                        return(
                            <SwiperSlide key={product.id}>
                                <div className="card">
                                    <div className="cardHead">
                                        <Image src={product.image} alt="testImage" width={150} height={150} />
                                    </div>
                                    <div className="cardBody">
                                        <p>{product.name}</p>
                                        <div className="cardContent">
                                            <button className={styles.btn} onClick={() => handleDelete(product.id)}>Delete</button>
                                            <strong>EGP {product.price}</strong>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                </div>
                )
            })}
            <Link href={"/admin/add"} className={styles.addBtn}>
                <span><FaPlus/></span>
                <span>Add New Product</span>
            </Link>
        </div>
    )
}

export default Products;