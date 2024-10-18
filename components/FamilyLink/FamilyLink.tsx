import classNames from "classnames";
import { FC } from "react";
import s from "./FamilyLink.module.css";
import Link from "next/link";

type FamilyLinkProps = {
  familyName: string;
  link: string;
};

const FamilyLink: FC<FamilyLinkProps> = ({ familyName, link }) => (
  <div className={s.container}>
    <div className={classNames(s.ball)} />
    <Link href={link} passHref>
      <span className={s.familyLink}>{familyName}</span>
    </Link>
  </div>
);

export default FamilyLink;
