import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="pt-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  h-[70vh]"
      >
        <SwiperSlide>
          <div className="relative">
            <div>
              <img src="/images/banner/1.jpg" alt="" />
            </div>
            <div className="absolute bottom-0">
              <h2>
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <button className="bg-[#FF3811] btn btn-primary">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/banner/2.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/banner/3.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/banner/4.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/banner/5.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/banner/6.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
