import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../actions";

export class CreateNewCategoryForm extends Component {
  state = {
    title: "",
    submitted: false
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { title } = this.state;
    if (!title) {
      return;
    }
    const { addCategory } = this.props;
    addCategory(title);
    this.setState({
      title: "",
      submitted: false
    });
  };
  render() {
    const { title, submitted } = this.state;
    const { loading } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="title">Create a new category:</label>
        <input
          type="text"
          name="title"
          className={"form-input" + (submitted && !title ? " error" : "")}
          value={title}
          onChange={this.handleChange}
          disabled={loading}
          placeholder="Category Title"
        />
        {submitted && !title && (
          <div className="error-block title">Category Title is required.</div>
        )}
        <button
          className="form-btn"
          disabled={loading}
          onClick={this.handleSubmit}
        >
          Create
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.app.loading
});
const mapDispatchToProps = dispatch => {
  const { addCategory } = actions;
  return bindActionCreators({ addCategory }, dispatch);
};
CreateNewCategoryForm.propTypes = {
  addCategory: PropTypes.func,
  loading: PropTypes.bool.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewCategoryForm);
