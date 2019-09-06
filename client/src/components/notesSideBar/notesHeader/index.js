import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import * as helpers from "../../../utils/helpers";

export class NotesHeader extends Component {
  handelClick = () => {
    const { addNote, activeCategory } = this.props;
    const categoryId = activeCategory ? activeCategory.id : 1;
    const date = helpers.getNow();
    addNote("UnTitled", categoryId, date);
  };
  render() {
    const { activeCategory, keyword, loading } = this.props;
    return (
      <div className="notes-sidebar-header">
        <h2 className="notes-list-title">
          {keyword
            ? `Search Result for ${keyword}:`
            : activeCategory
            ? `${activeCategory.title} Notes:`
            : "All Notes:"}
        </h2>
        {!keyword && (
          <button className="btn" disabled={loading} onClick={this.handelClick}>
            Create New Note
          </button>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  activeCategory: state.app.activeCategory,
  keyword: state.app.keyword,
  loading: state.app.loading
});
const mapDispatchToProps = dispatch => {
  const { addNote } = actions;
  return bindActionCreators({ addNote }, dispatch);
};
NotesHeader.propTypes = {
  addNote: PropTypes.func,
  activeCategory: PropTypes.any,
  keyword: PropTypes.any,
  loading: PropTypes.bool.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesHeader);
