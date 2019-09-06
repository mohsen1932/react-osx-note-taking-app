import React, { Component } from "react";
import PropTypes from "prop-types";
import { Style } from "./styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import * as helpers from "../../utils/helpers";

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.body = React.createRef();
    this.state = {
      body: ""
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.activeNote !== this.props.activeNote) {
      const { activeNote } = nextProps;
      this.setState({
        body: activeNote.body
      });
    }
  }
  componentDidUpdate() {
    const { activeNote } = this.props;
    if (activeNote) {
      this.body.current.focus();
    }
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleUpdate = e => {
    const { updateNote, activeNote } = this.props;
    const { body } = this.state;
    const date = helpers.getNow();
    updateNote({
      id: activeNote.id,
      body,
      categoryId: activeNote.categoryId,
      date
    });
  };
  handleDelete = e => {
    const { deleteNote, activeNote } = this.props;
    deleteNote(activeNote.id);
  };
  render() {
    const { activeNote } = this.props;
    const { body } = this.state;
    return (
      <Style>
        {activeNote ? (
          <>
            <div className="editor-header">
              <span>Start Editing the note here </span>
              <button className="btn save" onClick={this.handleUpdate}>
                Save
              </button>
              <button className="btn delete" onClick={this.handleDelete}>
                Delete
              </button>
            </div>
            <textarea
              name="body"
              value={body}
              onChange={this.handleChange}
              ref={this.body}
              className="textarea"
            />
          </>
        ) : (
          <>
            <span className="editor-placeholder">
              Select a note using sidebar
            </span>
          </>
        )}
      </Style>
    );
  }
}
const mapStateToProps = state => ({
  activeNote: state.app.activeNote
});
const mapDispatchToProps = dispatch => {
  const { deleteNote, updateNote } = actions;
  return bindActionCreators({ deleteNote, updateNote }, dispatch);
};
Editor.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  activeNote: PropTypes.any
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
