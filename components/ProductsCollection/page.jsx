'use client';
import styles from "./styles.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CartBtn from "../CartBtn/page";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProductsCollection({products, setProducts}) {
    const [acitve, setActive] = useState(0)
    const [collectionName, setCollectionName] = useState('Medicines')
    const buttons = [
        {
            id: 1,
            text: 'Medicines'
        },
        {
            id: 2,
            text: 'Hair Care'
        },
        {
            id: 3,
            text: 'Skin Care'
        },
        {
            id: 4,
            text: 'Makeup'
        },
        {
            id: 5,
            text: 'Vitamins'
        },
        {
            id: 6,
            text: 'Baby Food'
        },
    ]

    const handelCollection = (index, btnName) => {
        setActive(index)
        setCollectionName(btnName)
    }

    return(
        <section className={styles.sectionsContaienr}>
            <div className="title">
                <h2>Products for you!</h2>
            </div>
            <div className={styles.sectionBtns}>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={3}
                    breakpoints={{
                        640: {slidesPerView: 3},
                        768: {slidesPerView: 3},
                        1024: {slidesPerView: 6}
                    }}
                >
                {buttons.map((btn, index) => {
                    return(
                        <SwiperSlide key={btn.id}>
                            <button className={acitve === index ? `${styles.active}` : ""} onClick={() => handelCollection(index, btn.text)}>{btn.text}</button>
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </div>
            <div className={styles.sectionContent}>
                {products.filter((product) => product.type === collectionName).map(product => {
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
    )
}

export default ProductsCollection;