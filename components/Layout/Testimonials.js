import Image from "next/image";
import classes from "./Testimonials.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Testimonials = () => {
  return (
    <div className={classes.TestimonialsSection}>
      <div className="container">
        <div className={classes.TestimonialsWrapper}>
          <div className={classes.TestimonialsLeft}>
            <h2>Testimonials</h2>
            <p>
              Maecenas efficitur magna nulla, nec volutpat sem convallis quis.
              Nam molestie venenatis malesuada.
            </p>
          </div>
          <div className={classes.TestimonialsSlider}>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={16}
              slidesPerView={1}
              navigation
            >
              <SwiperSlide>
                <p className={classes.SliderContent}>
                  Maecenas efficitur magna nulla, nec volutpat sem convallis
                  quis. Nam molestie venenatis malesuada. Proin dolor sapien,
                  placerat non rhoncus feugiat, ullamcorper vel massa.
                </p>
                <div className={classes.SliderTeamWrapper}>
                  <div className={classes.SliderImgWrapper}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={40}
                      height={40}
                      src="/images/slider.png"
                    ></Image>
                  </div>
                  <div className={classes.SliderNameWrapper}>
                    <p>Eugenia Anderson</p>
                    <p>California</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <p className={classes.SliderContent}>
                  Maecenas efficitur magna nulla, nec volutpat sem convallis
                  quis. Nam molestie venenatis malesuada. Proin dolor sapien,
                  placerat non rhoncus feugiat, ullamcorper vel massa.
                </p>
                <div className={classes.SliderTeamWrapper}>
                  <div className={classes.SliderImgWrapper}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={40}
                      height={40}
                      src="/images/slider.png"
                    ></Image>
                  </div>
                  <div className={classes.SliderNameWrapper}>
                    <p>Eugenia Anderson</p>
                    <p>California</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <p className={classes.SliderContent}>
                  Maecenas efficitur magna nulla, nec volutpat sem convallis
                  quis. Nam molestie venenatis malesuada. Proin dolor sapien,
                  placerat non rhoncus feugiat, ullamcorper vel massa.
                </p>
                <div className={classes.SliderTeamWrapper}>
                  <div className={classes.SliderImgWrapper}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={40}
                      height={40}
                      src="/images/slider.png"
                    ></Image>
                  </div>
                  <div className={classes.SliderNameWrapper}>
                    <p>Eugenia Anderson</p>
                    <p>California</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
