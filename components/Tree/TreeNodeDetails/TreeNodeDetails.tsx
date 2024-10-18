import { useNodeSelectionContext } from "@/context/tree";
import { CloseIcon } from "@/icons/CloseIcon";
import { FC, useState } from "react";
import BioLink from "./BioLink/BioLink";
import BioNavItem from "./BioNavItem/BioNavItem";
import s from "./TreeNodeDetails.module.css";
import { TreeNodeDetailsBio } from "./TreeNodeDetailsBio/TreeNodeDetailsBio";
import { TreeNodeFamilies } from "./TreeNodeFamilies/TreeNodeFamilies";
import { getTreeNodeDetails } from "./utils";

const navigation = [
  { id: 1, title: "জীবনী" },
  { id: 2, title: "ছবি" },
  { id: 3, title: "পরিবার" },
];

const TreeNodeDetails: FC = () => {
  const { hasSubTree, selectedNodeId, unselectNode, selectNode } = useNodeSelectionContext();
  const [selectedNavId, setSelectedNavId] = useState<number>(1);
  const nodeDetails = getTreeNodeDetails(selectedNodeId);

  if (!nodeDetails) return null;

  console.log(nodeDetails);

  const tabContent =
    selectedNavId === 1 ? (
      <TreeNodeDetailsBio {...nodeDetails} onRelationNodeClick={(id) => selectNode(id)} />
    ) : selectedNavId === 2 ? (
      <>
        {nodeDetails.pictures ? (
          <img src={nodeDetails.pictures} alt="Image" height={100} width={100} />
        ) : (
          <>
            <span className={s.rootItem}>দুর্ভাগ্যবশত, আমাদের কাছে এখনও এই ব্যক্তির ছবি নেই।</span>
            <span className={s.rootItem}>
              আপনি যদি সাহায্য করতে চান এবং গ্যালারিতে ফটো যোগ করতে চান তবে দয়া করে আমাদের
              <BioLink href="https://wa.me/+8801620557840?text=Hello" text=" Whatsapp করুন" newTab={true} />।
            </span>
          </>
        )}
      </>
    ) : (
      <TreeNodeFamilies {...nodeDetails} />
    );

  return (
    <div className={s.root}>
      <button className={s.closeButton} onClick={unselectNode}>
        <CloseIcon className={s.closeIcon} />
      </button>
      <div className={s.rootItem}>
        <h2 className={s.name}>{nodeDetails.fullName}</h2>
        {hasSubTree && (
          <span className={s.hasSubTreeNote}>
            এখানে সব পূর্বপুরুষ দেখা যায় না। <br />
            পরিবার ট্যাবে আপনি দেখতে পাবেন
            <wbr /> {nodeDetails.firstName}.
          </span>
        )}
      </div>
      <nav className={s.rootItem}>
        {navigation.map((item, index) => (
          <BioNavItem
            key={index}
            id={item.id}
            text={item.title}
            isSelected={item.id === selectedNavId}
            onClick={setSelectedNavId}
          />
        ))}
      </nav>
      {tabContent}
    </div>
  );
};

export default TreeNodeDetails;
