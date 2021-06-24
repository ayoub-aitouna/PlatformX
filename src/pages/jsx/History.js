/* eslint-disable react/jsx-pascal-case */
import React from "react";
import style from "../css/History.module.css";
import { History_item } from "../../components";
function History() {
  return (
    <div className={style.parent_wrapper}>
      <div className={style.background}>
        <div className={style.cirl}></div>
      </div>{" "}
      <div className={style.content}>
        <div className={style.heder}>
          <h2>History</h2>
        </div>
        <div className={style.history_content}>
          <ul className={style.ul_wrapper}>
            <li>
              <History_item />
            </li>
            <li>
              <History_item />
            </li>
            <li>
              <History_item />
            </li>
            <li>
              <History_item />
            </li>
            <li>
              <History_item />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default History;
