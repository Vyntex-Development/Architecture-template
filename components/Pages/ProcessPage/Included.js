import classes from "./Included.module.css";
import Image from "next/image";

const Included = () => {
  return (
    <div className={`${classes.Container} container`}>
      <div className={classes.IncludedWrapper}>
        <div>
          <h2>What’s included?</h2>
        </div>
        <div className={classes.IncludedItems}>
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
        </div>
      </div>
    </div>
  );
};

export default Included;
