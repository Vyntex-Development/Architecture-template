import Image from "next/image";
import Link from "../UI/Link";
import classes from "./Process.module.css";
const Process = () => {
  return (
    <div className={`${classes.Container} container`}>
      <div className={classes.ProcessWrapper}>
        <div className={classes.ProcessLeft}>
          <div className={classes.ProcessImageOne}>
            <Image
              layout="fill"
              objectFit="cover"
              alt="hero"
              src="/images/process_one.png"
            ></Image>
          </div>
          <div className={classes.ProcessImageTwo}>
            <Image
              layout="fill"
              objectFit="cover"
              alt="hero"
              src="/images/process_two.png"
            ></Image>
          </div>
        </div>
        <div className={classes.ProcessRight}>
          <h2>Our Process</h2>
          <div className={classes.ProcessItem}>
            <div className={classes.ProcessItemTop}>
              <div>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={18}
                  height={16}
                  src="/images/process_icon01.png"
                ></Image>
              </div>
              <h3>ESTIMATE & BID</h3>
            </div>
            <p>
              Maecenas efficitur magna nulla, nec volutpat sem convallis quis.
              Nam molestie venenatis malesuada.
            </p>
          </div>
          <div className={classes.ProcessItem}>
            <div className={classes.ProcessItemTop}>
              <div>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={16}
                  height={16}
                  src="/images/process_icon02.png"
                ></Image>
              </div>
              <h3>DESIGN & PLAN</h3>
            </div>
            <p>
              Pellentesque rutrum sit amet purus vel auctor. Proin sit amet
              lacus nec dui maximus posuere vitae vitae mauris.
            </p>
          </div>
          <div className={classes.ProcessItem}>
            <div className={classes.ProcessItemTop}>
              <div>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={16}
                  height={16}
                  src="/images/process_icon03.png"
                ></Image>
              </div>
              <h3>BUILD & CONSTRUCT</h3>
            </div>
            <p>
              Donec efficitur dolor et odio tempus, nec lobortis nunc ultricies.
              Mauris convallis turpis quis imperdiet finibus.
            </p>
          </div>
          <Link href="/" type="transparent">
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Process;
