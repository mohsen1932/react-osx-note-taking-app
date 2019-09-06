import React, { Component } from "react";
import PropTypes from "prop-types";
import { SearchBox } from "./styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as helpers from "../../utils/helpers";
import * as actions from "../../actions";

export class SearchBar extends Component {
  handleChange = e => {
    const { value } = e.target;
    const { notes, setSearchResult } = this.props;
    const keyword = value.trim();
    if (!keyword) {
      setSearchResult(false, []);
      return;
    }
    const result = helpers.searchInNotesArray(notes, keyword);
    setSearchResult(keyword, result);
  };
  render() {
    const { loading } = this.props;
    return (
      <SearchBox>
        <input
          type="text"
          name="keyword"
          className="form-input"
          onChange={this.handleChange}
          placeholder="Search ..."
          disabled={loading}
        />
      </SearchBox>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.app.loading,
  notes: state.app.notes
});
const mapDispatchToProps = dispatch => {
  const { setSearchResult } = actions;
  return bindActionCreators({ setSearchResult }, dispatch);
};
SearchBar.propTypes = {
  setSearchResult: PropTypes.func,
  notes: PropTypes.array,
  loading: PropTypes.bool.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
