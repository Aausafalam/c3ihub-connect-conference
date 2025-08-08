import React from "react";
import styles from "./css/index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import data from "./data/index.json";
import { Link } from "react-router-dom";
import Heading from "../../../components/Heading";

const SupportedBy = () => {
    return (
        <section className={styles.container_wrapper}>
            <div className={styles.container}>
                <Heading title="SUPPORTED BY" />
                <div className={styles.contentBody}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={2}
                        onSlideChange={() => {}}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {data.map((item, index) => (
                            <Link to={item.url}>
                                <SwiperSlide>
                                    <div key={item.name + index}>
                                        <img src={`${require(`./images/${item.image}`)}`} alt={item.name} />
                                    </div>
                                </SwiperSlide>
                            </Link>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default SupportedBy;
