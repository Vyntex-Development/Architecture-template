import Image from "next/image";
import classes from "./Team.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Team = () => {
  return (
    <div className={`${classes.Container} container`}>
      <div className={classes.TeamWrapper}>
        <div>
          <h2>Meet the dream team</h2>
        </div>
        <div className={classes.TeamSlider}>
          <Swiper
            className="team-slider"
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={17}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className={classes.TeamCard}>
                <div className={classes.TeamImgWrapper}>
                  <div className={classes.TeamImg}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="hero"
                      src="/images/team_01.png"
                    ></Image>
                  </div>
                </div>
                <h3>Trevor Virtue</h3>
                <p>CEO & Co-Founder</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.TeamCard}>
                <div className={classes.TeamImgWrapper}>
                  <div className={classes.TeamImg}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="hero"
                      src="/images/team_02.png"
                    ></Image>
                  </div>
                </div>
                <h3>Ponnappa Priya</h3>
                <p>CTO & Founder</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.TeamCard}>
                <div className={classes.TeamImgWrapper}>
                  <div className={classes.TeamImg}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="hero"
                      src="/images/team_03.png"
                    ></Image>
                  </div>
                </div>
                <h3>Peter Stanbridge</h3>
                <p>Project Manager</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.TeamCard}>
                <div className={classes.TeamImgWrapper}>
                  <div className={classes.TeamImg}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="hero"
                      src="/images/team_04.png"
                    ></Image>
                  </div>
                </div>
                <h3>Hayman Andrews</h3>
                <p>Chief Architect & Co-Founder</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.TeamCard}>
                <div className={classes.TeamImgWrapper}>
                  <div className={classes.TeamImg}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="hero"
                      src="/images/team_01.png"
                    ></Image>
                  </div>
                </div>
                <h3>Trevor Virtue</h3>
                <p>CEO & Co-Founder</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.TeamCard}>
                <div className={classes.TeamImgWrapper}>
                  <div className={classes.TeamImg}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="hero"
                      src="/images/team_02.png"
                    ></Image>
                  </div>
                </div>
                <h3>Trevor Virtue</h3>
                <p>CEO & Co-Founder</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Team;
