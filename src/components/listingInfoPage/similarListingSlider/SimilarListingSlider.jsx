import React from "react";
import style from "./style.module.css";
import Listing from "../../listingPage/listing/Listing";
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftArrow, RightArrow } from "../../../assets/common/svg/listing";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const SimilarListingSlider = () => {
  return (
    <article className={`${style.similarListingSlider} `}>
      <h2>ბინები მსგავს ლოკაციაზე</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Listing />
        </SwiperSlide>
        <SwiperSlide>
          <Listing />
        </SwiperSlide>
        <SwiperSlide>
          <Listing />
        </SwiperSlide>
        <SwiperSlide>
          <Listing />
        </SwiperSlide>
        <SwiperSlide>
          <Listing />
        </SwiperSlide>
        <SwiperSlide>
          <Listing />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prevv">
        <LeftArrow />
      </div>
      <div className="swiper-button-nextt">
        <RightArrow />
      </div>
    </article>
  );
};

export default SimilarListingSlider;
