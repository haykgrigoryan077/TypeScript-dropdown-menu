import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DropDownItem from "../DropdownItem/DropdownItem";
import "./style.css";

interface PageHeaderPorps {
  title?: string;
  dropdownTitle?: string;
}

const PageHeader: React.FC<PageHeaderPorps> = ({
  title = "Solvee",
  dropdownTitle = "Menu",
}) => {
  const [dropdownMenuIsOpen, setDropDownMenuIsOpen] = useState(false);
  console.log(dropdownMenuIsOpen);

  const handleDropDownMenu = () => {
    setDropDownMenuIsOpen(!dropdownMenuIsOpen);
  };

  return (
    <div className="fullPageWrapper">
      <div className="pageHeaderWrapper">
        <div className="dropdownMenu">
          <div
            className="category"
            onClick={() => {
              setDropDownMenuIsOpen(!dropdownMenuIsOpen);
            }}
          >
            <h1 className="categoryTitle">{dropdownTitle}</h1>
          </div>
          {dropdownMenuIsOpen && (
            <div className="menuItems">
              <DropDownItem
                pageName="Home"
                path="/"
                onClick={handleDropDownMenu}
              />
              <DropDownItem
                pageName="Mens Clothes"
                path="/home/clothes/men"
                onClick={handleDropDownMenu}
              />
              <DropDownItem
                pageName="Women Clothes"
                path="/home/clothes/women"
                onClick={handleDropDownMenu}
              />
              <DropDownItem
                pageName="Jewelery"
                path="/home/jewelery"
                onClick={handleDropDownMenu}
              />
              <DropDownItem
                pageName="Electronics"
                path="/home/electronics"
                onClick={handleDropDownMenu}
              />
            </div>
          )}
        </div>
        <div className="headerTitle">
          <h1 className="title">{title}</h1>
        </div>
      </div>
      <main className="mainWrapper">
        <Outlet />
      </main>
      <footer className="footer">Handcrafted By Hayk Grigoryan</footer>
    </div>
  );
};

export default PageHeader;
