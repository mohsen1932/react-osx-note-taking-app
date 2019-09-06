import React from "react";
import GlobalStyle from "./theme/injectGlobal";
import { Main } from "./styles";
import CategoriesSideBar from "./components/categoriesSideBar";
import SearchBar from "./components/searchBar";
import NotesSideBar from "./components/notesSideBar";
import Editor from "./components/editor";

function App() {
  return (
    <>
      <GlobalStyle />
      <CategoriesSideBar />
      <Main>
        <SearchBar />
        <NotesSideBar />
        <Editor />
      </Main>
    </>
  );
}

export default App;
