'use client';
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaStar } from "react-icons/fa";

function Reviews() {
    return(
        <section className={styles.reviews}>
            <div className={styles.title}>
                <h2>What Our Customers</h2>
                <div className={styles.text}>
                    <div className={styles.stars}>
                        <p><FaStar/></p>
                        <p><FaStar/></p>
                        <p><FaStar/></p>
                        <p><FaStar/></p>
                    </div>
                    <p>Add Reviews on <span><FaStar/></span> Pharmacist</p>
                </div>
            </div>
            <div className={styles.reviewsContent}>
            <Swiper
                spaceBetween={20}
                slidesPerView={1.5}
                breakpoints={{
                    640: {slidesPerView: 1.5},
                    768: {slidesPerView: 1.5},
                    1024: {slidesPerView: 4}
                }}
                className={styles.swiper}
            >
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium voluptates, dolorem quia laboriosam iusto error, autem quibusdam numquam nostrum explicabo impedit nam possimus veritatis aliquam blanditiis odit porro libero.
                            </p>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.stars}>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium voluptates, dolorem quia laboriosam iusto error, autem quibusdam numquam nostrum explicabo impedit nam possimus veritatis aliquam blanditiis odit porro libero.
                            </p>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.stars}>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium voluptates, dolorem quia laboriosam iusto error, autem quibusdam numquam nostrum explicabo impedit nam possimus veritatis aliquam blanditiis odit porro libero.
                            </p>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.stars}>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium voluptates, dolorem quia laboriosam iusto error, autem quibusdam numquam nostrum explicabo impedit nam possimus veritatis aliquam blanditiis odit porro libero.
                            </p>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.stars}>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium voluptates, dolorem quia laboriosam iusto error, autem quibusdam numquam nostrum explicabo impedit nam possimus veritatis aliquam blanditiis odit porro libero.
                            </p>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.stars}>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium voluptates, dolorem quia laboriosam iusto error, autem quibusdam numquam nostrum explicabo impedit nam possimus veritatis aliquam blanditiis odit porro libero.
                            </p>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.stars}>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium voluptates, dolorem quia laboriosam iusto error, autem quibusdam numquam nostrum explicabo impedit nam possimus veritatis aliquam blanditiis odit porro libero.
                            </p>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.stars}>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium voluptates, dolorem quia laboriosam iusto error, autem quibusdam numquam nostrum explicabo impedit nam possimus veritatis aliquam blanditiis odit porro libero.
                            </p>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.stars}>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium voluptates, dolorem quia laboriosam iusto error, autem quibusdam numquam nostrum explicabo impedit nam possimus veritatis aliquam blanditiis odit porro libero.
                            </p>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.stars}>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium voluptates, dolorem quia laboriosam iusto error, autem quibusdam numquam nostrum explicabo impedit nam possimus veritatis aliquam blanditiis odit porro libero.
                            </p>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.stars}>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </section>
    )
}

export default Reviews;