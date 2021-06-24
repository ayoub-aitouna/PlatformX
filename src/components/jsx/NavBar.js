import { useState } from "react";
import { logo } from "../../Assets";
import style from "../css/NavBar.module.css";
import * as IconAi from "react-icons/ai";

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
    <div className={style.parent_wrapper}>
      <div className={style.logo_wrapper}>
        <img src={logo} alt="" srcSet="" />
      </div>{" "}
      <div
        className={
          !(scrolled > 0.5)
            ? `${style.menu_wrapper}`
            : `${style.menu_wrapper} ${style.active}`
        }
      >
        <ul>
          <li>
            <p> Our Team </p>{" "}
          </li>{" "}
          <li>
            <p> About </p>{" "}
          </li>
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
