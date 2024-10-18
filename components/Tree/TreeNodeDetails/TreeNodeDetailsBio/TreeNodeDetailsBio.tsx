import { TreeNodeDataWithRelations } from "@/types/tree";
import classNames from "classnames";
import { FC } from "react";
import BioRelationButtons, { RelationType } from "../BioRelationButtons/BioRelationButtons";
import { getDate } from "../utils";
import s from "./TreeNodeDetailsBio.module.css";

type TreeNodeDetailsBioProps = TreeNodeDataWithRelations & {
  onRelationNodeClick: (id: string) => void;
};

export const TreeNodeDetailsBio: FC<TreeNodeDetailsBioProps> = ({
  birthYear,
  birthMonth,
  birthDay,
  deathYear,
  deathMonth,
  deathDay,
  birthPlace,
  deathPlace,
  parents,
  siblings,
  spouses,
  children,
  nationality,
  education,
  occupation,
  rewards,
  bio,
  onRelationNodeClick,
}) => {
  const birthDate = getDate(birthYear, birthMonth, birthDay);
  const deathDate = getDate(deathYear, deathMonth, deathDay);
  return (
    <div className={s.bioContainer}>
      <div className={classNames(s.bioGrid)}>
        {birthDate && (
          <>
            <span className={s.gridItemTitle}>জন্ম তারিখ</span>
            <span className={s.gridItemValue}>{birthDate}</span>
          </>
        )}
        {birthPlace && (
          <>
            <span className={s.gridItemTitle}>জন্মস্থান</span>
            <span className={s.gridItemValue}>{birthPlace}</span>
          </>
        )}
        {deathDate && (
          <>
            <span className={s.gridItemTitle}>মৃত্যুর তারিখ</span>
            <span className={s.gridItemValue}>{deathDate}</span>
          </>
        )}
        {deathPlace && (
          <>
            <span className={s.gridItemTitle}>মৃত্যু স্থান</span>
            <span className={s.gridItemValue}>{deathPlace}</span>
          </>
        )}
        {parents && parents.length > 0 && (
          <>
            <span className={s.gridItemTitle}>পিতামাতা</span>
            <div className={classNames(s.gridItemValue)}>
              <BioRelationButtons onClick={onRelationNodeClick} items={parents} relationType={RelationType.Parents} />
            </div>
          </>
        )}
        {siblings && siblings.length > 0 && (
          <>
            <span className={s.gridItemTitle}>ভাই ও বোনেরা</span>
            <div className={classNames(s.gridItemValue)}>
              <BioRelationButtons onClick={onRelationNodeClick} items={siblings} relationType={RelationType.Siblings} />
            </div>
          </>
        )}
        {spouses && spouses.length > 0 && (
          <>
            <span className={s.gridItemTitle}>{spouses.length > 1 ? "স্ত্রী" : "স্বামী"}</span>
            <div className={classNames(s.gridItemValue)}>
              <BioRelationButtons onClick={onRelationNodeClick} items={spouses} relationType={RelationType.Spouses} />
            </div>
          </>
        )}
        {children && children.length > 0 && (
          <>
            <span className={s.gridItemTitle}>সন্তান</span>
            <div className={classNames(s.gridItemValue)}>
              <BioRelationButtons onClick={onRelationNodeClick} items={children} relationType={RelationType.Children} />
            </div>
          </>
        )}
        {nationality && (
          <>
            <span className={s.gridItemTitle}>জাতীয়তা</span>
            <span className={s.gridItemValue}>{nationality}</span>
          </>
        )}
        {education && (
          <>
            <span className={s.gridItemTitle}>শিক্ষা</span>
            <span className={s.gridItemValue}>{education}</span>
          </>
        )}
        {occupation && (
          <>
            <span className={s.gridItemTitle}>পেশা</span>
            <span className={s.gridItemValue}>{occupation}</span>
          </>
        )}
        {rewards && (
          <>
            <span className={s.gridItemTitle}>পুরস্কার</span>
            <span className={s.gridItemValue}>{rewards.join(", ")}</span>
          </>
        )}
      </div>
      {bio && <span className={classNames(s.rootItem)}>{bio}</span>}
    </div>
  );
};
