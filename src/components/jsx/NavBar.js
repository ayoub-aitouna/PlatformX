import { useState } from "react";
import { logo } from "../../Assets";
import style from "../css/NavBar.module.css";
import * as IconAi from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
  const [scrolled, setscrolled] = useState(0);
  window.addEventListener("scroll", () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    setscrolled(scrolled);
    console.log(scrolled);
  });

  return (
    <div
      className={
        !(scrolled > 0.3)
          ? `${style.parent_wrapper}`
          : `${style.parent_wrapper} ${style.active}`
      }
    >
      <Link to="/">
        <div className={style.logo_wrapper}>
          <img src={logo} alt="" srcSet="" />
        </div>{" "}
      </Link>
      <div className={style.menu_wrapper}>
        <ul>
          <li>
            <p> Our Team </p>{" "}
          </li>{" "}
          <li>
            <p> About </p>{" "}
          </li>{" "}
          <li>
            <p> Pricing </p>{" "}
          </li>{" "}
          <li>
            <IconAi.AiOutlineUser className={style.icon} />{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
}

export default NavBar;
