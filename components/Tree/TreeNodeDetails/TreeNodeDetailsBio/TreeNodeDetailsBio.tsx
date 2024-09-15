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
            <span className={s.gridItemTitle}>Birth Date</span>
            <span className={s.gridItemValue}>{birthDate}</span>
          </>
        )}
        {birthPlace && (
          <>
            <span className={s.gridItemTitle}>Birth Place</span>
            <span className={s.gridItemValue}>{birthPlace}</span>
          </>
        )}
        {deathDate && (
          <>
            <span className={s.gridItemTitle}>Death Date</span>
            <span className={s.gridItemValue}>{deathDate}</span>
          </>
        )}
        {deathPlace && (
          <>
            <span className={s.gridItemTitle}>Death Place</span>
            <span className={s.gridItemValue}>{deathPlace}</span>
          </>
        )}
        {parents && parents.length > 0 && (
          <>
            <span className={s.gridItemTitle}>Parents</span>
            <div className={classNames(s.gridItemValue)}>
              <BioRelationButtons onClick={onRelationNodeClick} items={parents} relationType={RelationType.Parents} />
            </div>
          </>
        )}
        {siblings && siblings.length > 0 && (
          <>
            <span className={s.gridItemTitle}>Brothers and sisters</span>
            <div className={classNames(s.gridItemValue)}>
              <BioRelationButtons onClick={onRelationNodeClick} items={siblings} relationType={RelationType.Siblings} />
            </div>
          </>
        )}
        {spouses && spouses.length > 0 && (
          <>
            <span className={s.gridItemTitle}>{spouses.length > 1 ? "Spouses" : "Spouse"}</span>
            <div className={classNames(s.gridItemValue)}>
              <BioRelationButtons onClick={onRelationNodeClick} items={spouses} relationType={RelationType.Spouses} />
            </div>
          </>
        )}
        {children && children.length > 0 && (
          <>
            <span className={s.gridItemTitle}>Children</span>
            <div className={classNames(s.gridItemValue)}>
              <BioRelationButtons onClick={onRelationNodeClick} items={children} relationType={RelationType.Children} />
            </div>
          </>
        )}
        {nationality && (
          <>
            <span className={s.gridItemTitle}>Nationality</span>
            <span className={s.gridItemValue}>{nationality}</span>
          </>
        )}
        {education && (
          <>
            <span className={s.gridItemTitle}>Education</span>
            <span className={s.gridItemValue}>{education}</span>
          </>
        )}
        {occupation && (
          <>
            <span className={s.gridItemTitle}>Occupation</span>
            <span className={s.gridItemValue}>{occupation}</span>
          </>
        )}
        {rewards && (
          <>
            <span className={s.gridItemTitle}>Awards</span>
            <span className={s.gridItemValue}>{rewards.join(", ")}</span>
          </>
        )}
      </div>
      {bio && <span className={classNames(s.rootItem)}>{bio}</span>}
    </div>
  );
};
