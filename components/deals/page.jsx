'use client';
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import CartBtn from "../CartBtn/page";

function Deals({products, setProducts}) {
    return(
        <section className={styles.deals}>
            <div className="title">
                <h2>Today best deals <br /> for you!</h2>
                <Link href={'/'} className='titleLink'>
                    <span>See All Products</span>
                    <span><FaArrowRightLong/></span>
                </Link>
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
                {products.filter((product) => product.type === 'Deals').map(product => {
                    return(
                        <SwiperSlide key={product.id}>
                            <div className="card">
                                <div className="cardHead">
                                    <Link href={`/info/${encodeURIComponent(product.id)}`}>
                                        <Image src={product.image} alt="ProductImage" width={150} height={150} />
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
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </section>
    )
}

export default Deals;