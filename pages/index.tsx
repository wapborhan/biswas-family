import Button from "@/components/Button/Button";
import { getFamiliesCount, getNodesCount, getTreeDepth } from "@/components/Widget/utils";
import Widget from "@/components/Widget/Widget";
import ballS from "@/styles/Ball.module.css";
import s from "@/styles/HomePage.module.css";
import classNames from "classnames";
import type { NextPage } from "next";
import Image from "next/image";

const HomePage: NextPage = () => {
  const nodesCount = getNodesCount();
  const treeDepth = getTreeDepth();
  const familiesCount = getFamiliesCount();

  return (
    <div className={s.pageContainer}>
      <div className={s.content}>
        <div className={s.descriptionContainer}>
          <div className={classNames(s.logoContainer, s.descriptionItem)}>
            <Image src="/LogoBig.png" width={120} height={110} alt="Логотип проекта древо" />
            <span className={s.logoTitle}>Biswas Family</span>
          </div>
          <span className={classNames(s.description, s.descriptionItem)}>
          Md. Nifaz Biswas and all his successors. The next generation will know and recognize.
          </span>

          <div className={s.buttonsContainer}>
            <Button href="/tree" text="Explore" className={s.descriptionItem} />
            <Button
              href="https://wa.me/8801620557840"
              text="Write to WhatsApp"
              className={s.descriptionItem}
              isSecondary={true}
              newTab={true}
            />
          </div>
        </div>
        <div className={s.widgets}>
          <Widget title="Just a person in a tree" value={nodesCount.toString()} />
          <Widget title="Generations" value={treeDepth.toString()} />
          <Widget title="Different families in a tree" value={familiesCount.toString()} />
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

export default HomePage;
