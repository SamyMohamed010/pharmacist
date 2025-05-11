'use client';
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ChangeBtn from "../ChangeBtn/page";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

function ChangeSection({userProducts, setUserProducts}) {
    return(
        <section className={styles.chnangeContainer}>
            <div className="title">
                <h2>Exchange Products</h2>
                <Link href={'/change'} className='titleLink'>
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
                {userProducts.map(product => {
                    return(
                        <SwiperSlide key={product.id}>
                            <div className="card">
                                <div className="cardHead">
                                    <Link href={`/changeInfo/${encodeURIComponent(product.id)}`}>
                                        <Image src={product.image} alt="testImage" width={150} height={150} />
                                    </Link>
                                </div>
                                <div className="cardBody">
                                    <p>{product.name}</p>
                                    <div className="cardContent">
                                        <ChangeBtn/>
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

export default ChangeSection;