/* eslint-disable react/jsx-pascal-case */
import React from "react";
import style from "../css/Payment.module.css";
import { Payment_item } from "../../components";

function PayemntPage() {
  return (
    <div className={style.Wrapper}>
      <ul className={style.ul}>
        <li className={style.li}>
          <Payment_item />
        </li>{" "}
        <li className={style.li}>
          <Payment_item />
        </li>{" "}
        <li className={style.li}>
          <Payment_item />
        </li>{" "}
      </ul>{" "}
    </div>
  );
}

export default PayemntPage;
