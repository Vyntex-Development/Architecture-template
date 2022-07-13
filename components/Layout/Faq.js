import Image from "next/image";
import Link from "../UI/Link";
import classes from "./Faq.module.css";

const Faq = () => {
  return (
    <div className="container">
      <div className={classes.FaqWrapper}>
        <div className={classes.FaqLeft}>
          <h2>Got questions? We got answers!</h2>
          <p>
            Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
            molestie venenatis malesuada.
          </p>
          <div className={classes.ButtonWrapper}>
            <Link href="/" type="dark">
              CONTACT US
            </Link>
            <a className={classes.Link} href="telto:6317806123" type="tel">
              <div className={classes.LinkPhone}>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={16}
                  height={16}
                  src="/images/faq_tel.png"
                ></Image>
              </div>
              631-780-6123
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
