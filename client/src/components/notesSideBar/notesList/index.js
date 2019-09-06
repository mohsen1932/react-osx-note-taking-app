import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import * as helpers from "../../../utils/helpers";

export class NotesList extends Component {
  componentDidMount() {
    const { getAll } = this.props;
    getAll();
  }
  setActiveItem = item => {
    const { setActiveNote, onSelect } = this.props;
    setActiveNote(item);
    onSelect();
  };
  renderFarm = (items = [], activeItem) => {
    return items.map(item => {
      return (
        <li
          id={item.id}
          key={item.id}
          className={
            activeItem && activeItem.id === item.id
              ? `item-${item.id} active`
              : `item-${item.id}`
          }
          onClick={e => this.setActiveItem(item)}
        >
          <h3 className="note-title">{helpers.getNoteTitle(item.body)}</h3>
          <span className="note-date">{item.date}</span>
        </li>
      );
    });
  };
  render() {
    const {
      activeCategory,
      notes,
      activeCategoryNotes,
      keyword,
      searchResult,
      activeNote
    } = this.props;
    const activeItems = activeCategory ? activeCategoryNotes : notes;
    const items = keyword ? searchResult : activeItems;
    return <ul>{this.renderFarm(items, activeNote)}</ul>;
  }
}
const mapStateToProps = state => ({
  notes: state.app.notes,
  activeCategory: state.app.activeCategory,
  activeNote: state.app.activeNote,
  activeCategoryNotes: state.app.activeCategoryNotes,
  keyword: state.app.keyword,
  searchResult: state.app.searchResult
});
const mapDispatchToProps = dispatch => {
  const { setActiveNote, getAll } = actions;
  return bindActionCreators({ setActiveNote, getAll }, dispatch);
};
NotesList.propTypes = {
  onSelect: PropTypes.func,
  setActiveNote: PropTypes.func,
  getAll: PropTypes.func,
  notes: PropTypes.array,
  activeCategory: PropTypes.any,
  activeNote: PropTypes.any,
  activeCategoryNotes: PropTypes.array,
  keyword: PropTypes.any,
  searchResult: PropTypes.array
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesList);
