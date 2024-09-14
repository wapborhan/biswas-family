import Credit from "@/components/Credit/Credit";
import ballS from "@/styles/Ball.module.css";
import s from "@/styles/CreditsPage.module.css";
import classNames from "classnames";
import type { NextPage } from "next";
import Image from "next/image";

const credits = [
  { name: "Borhan Uddin", description: "Developed This Site" },
  { name: "Md Zihad Ali", description: "for the painstaking collection of information" },
  // {
  //   name: "Артемову Сергею",
  //   description: "for structuring information for the site",
  // },
];

const CreditsPage: NextPage = () => {
  return (
    <div className={s.pageContainer}>
      <div className={s.content}>
        <div className={s.descriptionContainer}>
          <div className={classNames(s.titleContainer, s.descriptionItem)}>
            <div className={s.logoContainer}>
              <Image src="/LogoBig.png" width={120} height={110} alt="Biswas Family" />
            </div>
            <span className={s.logoTitle}>Credits</span>
          </div>
          {credits.map((item, index) => (
            <Credit key={index} name={item.name} description={item.description} />
          ))}
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
};

export default CreditsPage;
