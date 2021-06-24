import React from "react";
import style from "../css/History_item.module.css";
import * as AiIcon from "react-icons/ai";
function History_item() {
  return (
    <div className={style.wrapper}>
      <div className={style.name_wrapper}>
        <p> Document </p>{" "}
      </div>
      <div className={style.icons}>
        <AiIcon.AiOutlineDelete className={style.icon} />
        <AiIcon.AiOutlineCloudDownload className={style.icon} />
      </div>
    </div>
  );
}

export default History_item;
