import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import classes from "./LightBox.module.css";
import Image from "next/image";

const CustomLightbox = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className={classes.BoxButton}>
        <div className={classes.PlayButton}>
          <Image
            layout="fixed"
            objectFit="fill"
            alt="icon"
            width={24}
            height={21}
            src="/images/play.png"
          ></Image>
        </div>

        <button onClick={() => setToggler(!toggler)}></button>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        ]}
      />
    </>
  );
};

export default CustomLightbox;
