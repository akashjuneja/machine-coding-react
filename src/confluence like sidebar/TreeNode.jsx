import React, { useState } from "react";
import './treenode.css';
import { RxCaretRight,RxCaretDown } from "react-icons/rx";
import { BsDot } from "react-icons/bs";
const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{paddingLeft:'20px'}}>
      <div className="row">
        {hasChildren && (
          <div className="caret-icon"  onClick={() => setExpanded(!expanded)}>
            {expanded ? <RxCaretDown /> : <RxCaretRight />}
          </div>
        )}
        {!hasChildren && (
          <div className="caret-icon">
            <BsDot />
          </div>
        )}
        <a
          href={node.link}
          className="node-link"
        >
          {node.label}
        </a>
      </div>
      {hasChildren && expanded && node.children.map((child) => (
        <TreeNode key={child.id} node={child} />
      ))}
    </div>
  );
};

export default TreeNode;
