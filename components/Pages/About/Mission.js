import Image from "next/image";
import classes from "./Mission.module.css";

const Mission = () => {
  return (
    <div>
      <div className={classes.MissionGray}>
        <div className={`${classes.Container} container`}>
          <div className={classes.MissionWrapper}>
            <div className={classes.MissionLeft}>
              <p className={classes.MissionLarge}>
                Pellentesque habitant morbi tristique senectus et netus et
                <span> malesuada fames</span> ac turpis egestas. Ut at risus in
                turpis iaculis dapibus. Morbi volutpat eget
                <span> velit eget </span>volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${classes.Container} container`}>
          <div className={classes.MissionWrapperBottom}>
            <div className={classes.MissionLeft}>
              <div className={classes.MissionImg}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  src="/images/mission.png"
                ></Image>
              </div>
            </div>
            <div className={classes.MissionRight}>
              <div>
                <h2>Our mission</h2>
                <p>
                  Aliquam quis neque rhoncus, mattis leo ac, tempus felis.
                  Maecenas pharetra, libero sed maximus aliquet, velit odio
                  tincidunt lacus, id semper ex dolor eu sapien.
                </p>
                <p>
                  Aenean consectetur, dui a ultrices sagittis, quam tortor
                  auctor augue, id dignissim lacus nulla a dui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
