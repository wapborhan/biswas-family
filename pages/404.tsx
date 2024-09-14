import Button from "@/components/Button/Button";
import s from "@/styles/404.module.css";
import ballS from "@/styles/Ball.module.css";
import classNames from "classnames";
import type { NextPage } from "next";

const ErrorPage: NextPage = () => (
  <div className={s.pageContainer}>
    <div className={s.content}>
      <span className={classNames(s.descriptionItem, s.title)}>
      Oops! This page was not found</span>
      <div className={s.buttonsContainer}>
        <Button href="/tree" text="View Tree" className={s.descriptionItem} />
        <Button href="/" text="Homepage" className={s.descriptionItem} isSecondary={true} />
      </div>
    </div>
    <div className={s.imageContainer}>
      <div className={ballS.ball1} />
      <div className={ballS.ball2} />
      <div className={ballS.ball3} />
      <div className={ballS.ball4} />
      <div className={ballS.ball5} />
    </div>
  </div>
);

export default ErrorPage;
