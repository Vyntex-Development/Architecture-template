import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import classes from "./LightBoxGallery.module.css";
import Image from "next/image";
import ProjectMain from "../Pages/ProjectPage/ProjectMain";

const LightBoxGallery = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 4,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <div className="container">
        <div className={classes.GalleryWrapper}>
          <div>
            <h2>Gallery</h2>
          </div>
          <div className={classes.GalleryImages}>
            <button onClick={() => openLightboxOnSlide(1)}>
              <div className={classes.ImageWrapper}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  src="/images/lightbox_01.png"
                ></Image>
              </div>
            </button>
            <button onClick={() => openLightboxOnSlide(2)}>
              <div className={classes.ImageWrapper}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  src="/images/lightbox_02.png"
                ></Image>
              </div>
            </button>
            <button onClick={() => openLightboxOnSlide(3)}>
              <div className={classes.ImageWrapper}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  src="/images/lightbox_03.png"
                ></Image>
              </div>
            </button>
            <button onClick={() => openLightboxOnSlide(4)}>
              <div className={classes.ImageWrapper}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  src="/images/lightbox_04.png"
                ></Image>
              </div>
            </button>
            <FsLightbox
              toggler={lightboxController.toggler}
              sources={[
                "images/lightbox_01.png",
                "/images/lightbox_02.png",
                "/images/lightbox_03.png",
                "/images/lightbox_04.png",
              ]}
              slide={lightboxController.slide}
            />
          </div>
          <p className={classes.Next}>NEXT PROJECT</p>
        </div>
      </div>
      <div className={classes.GalleryBottom}>
        <ProjectMain></ProjectMain>
      </div>
    </>
  );
};

export default LightBoxGallery;
