import classes from "./ProjectAbout.module.css";
import Image from "next/image";

const ProjectAbout = () => {
  return (
    <div className={`${classes.Container} container`}>
      <div className={classes.AboutTop}>
        <h2>About the project</h2>
        <p>
          How royal societies can help you live a better life. How not knowing
          entertainment weeks makes you a rookie. How entertainment centers can
          help you predict the future. How to be unpopular in the weather
          channel world.What the beatles could learn from elementary schools.
          Why mom was right about weather radars. 6 myths uncovered about civil
          societies. The 9 best new technology twitter feeds to follow. 20 uses
          for world books.
        </p>
      </div>
      <div className={classes.AboutMiddle}>
        <div className={classes.AboutImage}>
          <Image
            layout="fill"
            objectFit="cover"
            alt="hero"
            src="/images/about_project.png"
          ></Image>
        </div>
      </div>
      <div className={classes.AboutBottom}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          facilisis velit tellus. Fusce in laoreet turpis. Fusce efficitur nisl
          purus, nec pretium magna porttitor eu. Donec efficitur neque sit amet
          sem semper, ac ullamcorper purus lacinia. Proin a sem lorem. Etiam
          porta tristique ipsum, ac viverra nisl lobortis vel.
        </p>
        <p>
          Aliquam in quam mauris. Phasellus augue ipsum, auctor id mauris id,
          hendrerit maximus eros. Maecenas vel justo vel erat dignissim
          venenatis eget vitae nisl. Sed tristique felis ante. Pellentesque
          accumsan at ipsum non tincidunt. Mauris mattis feugiat erat id
          elementum. Nullam auctor elit et felis semper dignissim. Pellentesque
          sagittis sem vel imperdiet maximus. Pellentesque pulvinar leo ut
          viverra facilisis. Sed ornare ipsum ex, in dignissim neque consequat
          ac.
        </p>
        <p>
          Proin mi massa, pulvinar et sagittis sed, vestibulum sit amet ligula.
          Cras rutrum ex vitae enim laoreet, vitae blandit tellus ultrices.
          Donec malesuada purus non placerat aliquam. Maecenas at venenatis
          orci, id pellentesque mauris. Donec posuere posuere leo et tristique.
          Morbi consectetur venenatis aliquet. Sed congue erat a turpis
          condimentum accumsan.
        </p>
        <p>
          Sed vitae pulvinar turpis, quis congue neque. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Nam venenatis vestibulum fermentum.
          Nam imperdiet suscipit lorem id pretium. Cras vel nisi ac ante dapibus
          tempus. Suspendisse blandit est est. Donec varius vitae justo vitae
          congue. Nullam vitae lacinia ex, eget tincidunt leo.
        </p>
      </div>
    </div>
  );
};

export default ProjectAbout;
