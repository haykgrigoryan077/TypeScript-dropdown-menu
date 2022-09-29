import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

interface DropDownItemProps {
  pageName: string;
  path: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> 
}

const DropDownItem: React.FC<DropDownItemProps> = ({ pageName, path, onClick }) => {
  return (
    <div className="dropdownItem">
      <NavLink to={path} onClick={onClick}>{pageName}</NavLink>
    </div>
  );
};

export default DropDownItem;
