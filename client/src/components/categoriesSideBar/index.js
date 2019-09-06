import React from "react";
import { Style } from "./styles";
import CategoriesList from "./categoriesList";
import CreateNewCategoryForm from "./createNewCategoryForm";

export const CategoriesSideBar = () => {
  let categories_sidebar = React.createRef();
  const toggleOpen = () => {
    categories_sidebar.current.classList.toggle("open");
  };
  return (
    <Style ref={categories_sidebar}>
      <h1>OSX Notebook</h1>
      <button className="btn mobile" onClick={toggleOpen}>
        Categories
      </button>
      <CategoriesList onSelect={toggleOpen} />
      <CreateNewCategoryForm />
    </Style>
  );
};
export default CategoriesSideBar;
