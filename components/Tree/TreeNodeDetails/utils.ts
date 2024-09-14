import { getTreeNodesMap } from "@/data";
import { RelationInfo, TreeNodeDataWithRelations, TreeNodeRelation } from "@/types/tree";

const nodesMap = getTreeNodesMap();

export const getMonthString = (month: number, day?: number) => {
  return day === undefined ? genitiveCaseMonths[month] : nominativeCaseMonths[month];
};
const nominativeCaseMonths: Record<number, string> = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};
const genitiveCaseMonths: Record<number, string> = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const getDate = (year?: number, month?: number, day?: number) => {
  return year
    ? month
      ? day
        ? `${day} ${getMonthString(month)} ${year}`
        : `${getMonthString(month)} ${year}`
      : `${year}`
    : undefined;
};

const getTreeNodeRelationDetails = (relations: TreeNodeRelation[]): RelationInfo[] => {
  return relations.map((relation) => {
    return {
      id: relation.id,
      fullName: nodesMap[relation.id].data.fullName,
      type: relation.type,
      firstName: nodesMap[relation.id].data.firstName,
    };
  });
};
export const getTreeNodeDetails = (selectedNodeId?: string): TreeNodeDataWithRelations | undefined => {
  if (selectedNodeId === undefined) {
    return;
  }
  const selectedNode = nodesMap[selectedNodeId];
  const parents = getTreeNodeRelationDetails(selectedNode.parents as TreeNodeRelation[]);
  const children = getTreeNodeRelationDetails(selectedNode.children as TreeNodeRelation[]);
  const spouses = getTreeNodeRelationDetails(selectedNode.spouses as TreeNodeRelation[]);
  const siblings = getTreeNodeRelationDetails(selectedNode.siblings as TreeNodeRelation[]);
  return {
    ...selectedNode.data,
    parents,
    children,
    spouses,
    siblings,
  };
};
