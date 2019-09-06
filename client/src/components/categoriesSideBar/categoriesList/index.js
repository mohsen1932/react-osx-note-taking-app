import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as actions from "../../../actions";
import { connect } from "react-redux";
import * as helpers from "../../../utils/helpers";

export class CategoriesList extends Component {
  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }
  setActiveItem = item => {
    const {
      setActiveCategory,
      setCategoryItems,
      notes,
      setActiveNote,
      onSelect
    } = this.props;
    setActiveCategory(item);
    const result = helpers.filterCategoryItems(notes, item);
    setCategoryItems(result);
    setActiveNote(false);
    onSelect();
  };
  renderFarm = (items = [], activeItem, keyword) => {
    return items.map(item => {
      return (
        <li
          id={item.id}
          key={item.id}
          className={
            !keyword && (activeItem && activeItem.id === item.id)
              ? `item-${item.id} active`
              : `item-${item.id}`
          }
          onClick={e => this.setActiveItem(item)}
        >
          <span className="category-title">{item.title}</span>
        </li>
      );
    });
  };
  render() {
    const { categories, activeCategory, keyword } = this.props;
    return (
      <ul>
        <li
          className={!activeCategory && !keyword ? "active" : ""}
          onClick={e => this.setActiveItem(false)}
        >
          All Notes
        </li>
        {this.renderFarm(categories, activeCategory, keyword)}
      </ul>
    );
  }
}
const mapStateToProps = state => ({
  categories: state.app.categories,
  activeCategory: state.app.activeCategory,
  notes: state.app.notes,
  keyword: state.app.keyword
});
const mapDispatchToProps = dispatch => {
  const {
    setActiveCategory,
    getCategories,
    setCategoryItems,
    setActiveNote
  } = actions;
  return bindActionCreators(
    { setActiveCategory, getCategories, setCategoryItems, setActiveNote },
    dispatch
  );
};
CategoriesList.propTypes = {
  onSelect: PropTypes.func,
  setActiveCategory: PropTypes.func,
  getCategories: PropTypes.func,
  setCategoryItems: PropTypes.func,
  categories: PropTypes.array,
  activeCategory: PropTypes.any,
  keyword: PropTypes.any,
  setActiveNote: PropTypes.func,
  notes: PropTypes.array
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesList);
