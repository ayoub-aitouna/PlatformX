import React from "react";
import style from "../css/PaymentItem.module.css";
import * as IconBi from "react-icons/bi";
import * as Icon from "react-icons/ri";
function Payment_item() {
  return (
    <div className={style.Itemwrapper}>
      <div className={style.icon_wrapper}>
        <Icon.RiVipCrownLine className={style.Icon} />
        <p>Premuime</p>
      </div>
      <ul className={style.ulItem}>
        <li>
          <IconBi.BiCheck className={style.liIcon} />
          <p>Lorem, ipsum.</p>
        </li>
        <li>
          <IconBi.BiCheck className={style.liIcon} />
          <p>Lorem, ipsum.</p>
        </li>
        <li>
          <IconBi.BiCheck className={style.liIcon} />
          <p>Lorem, ipsum.</p>
        </li>
        <li>
          <IconBi.BiCheck className={style.liIcon} />
          <p>Lorem, ipsum.</p>
        </li>
        <li>
          <IconBi.BiCheck className={style.liIcon} />
          <p>Lorem, ipsum.</p>
        </li>
      </ul>
      <input className={style.start} type="button" value="Start" />
    </div>
  );
}

export default Payment_item;
