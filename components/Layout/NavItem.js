import classes from "./NavItem.module.css";
import Image from "next/image";
import Link from "../UI/Link";

import { useState, useEffect, useRef } from "react";
const NavItem = ({ navText, imgSrc }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [initial, setInitial] = useState(false);
  //   const [hover, setHover] = useState(false);
  const navRef = useRef();
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.target.closest(".nav-item") !== navRef.current) return;
      setInitial(true);
      setMousePosition({
        ...mousePosition,
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div ref={navRef} className="nav-item">
      <Link href="/" type="navOpen">
        {navText}
      </Link>

      <img
        style={{
          transform: `translate(calc(${!initial ? "0vw" : "-70vw"} + ${
            mousePosition.x
          }px), calc(${!initial ? "0vh" : "-70vh"} + ${mousePosition.y}px))`,
        }}
        src={imgSrc}
      />
    </div>
  );
};
export default NavItem;
