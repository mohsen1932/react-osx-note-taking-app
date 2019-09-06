import React from "react";
import { Style } from "./styles";
import NotesList from "./notesList";
import NotesHeader from "./notesHeader";
import { connect } from "react-redux";

const NotesSideBar = props => {
  let notes_sidebar = React.createRef();
  const toggleOpen = () => {
    notes_sidebar.current.classList.toggle("open");
  };
  const openClass = props.keyword ? "open" : "";
  return (
    <Style ref={notes_sidebar} className={openClass}>
      <button className="btn mobile" onClick={toggleOpen}>
        Notes
      </button>
      <NotesHeader />
      <NotesList onSelect={toggleOpen} />
    </Style>
  );
};
const mapStateToProps = state => ({
  keyword: state.app.keyword
});
export default connect(mapStateToProps)(NotesSideBar);
