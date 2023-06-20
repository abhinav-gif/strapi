import React from "react";
import sublinks from "./data";
import { useGlobalContext } from "./GlobalContext";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        return (
          <button
            className="nav-link"
            key={item.pageId}
            onMouseEnter={() => setPageId(item.pageId)}
          >
            {item.page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
