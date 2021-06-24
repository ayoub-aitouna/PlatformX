import React from "react";
import style from "../css/Dashboard.module.css";
import * as IconBi from "react-icons/bi";

function Dashboard() {
  return (
    <div className={style.parent_wrapper}>
      <div className={style.background}> </div>{" "}
      <div className={style.content_wrapper}>
        <div className={style.add}>
          <IconBi.BiPlus />
        </div>{" "}
        <div className={style.content}>
          <div className={style.header}>
            <div className={style.line}> </div> <p> Welcome to PlatformX </p>{" "}
          </div>{" "}
          <h1> Lorem ipsum dolor consectetur </h1>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam
            tellus, viverra scelerisque massa.{" "}
          </p>{" "}
          <div className={style.vid_container}>
            <iframe
              className={style.Iframe}
              src="https://www.youtube.com/embed/IrcP_IQuYk4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Dashboard;
