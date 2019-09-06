import Editor from "./index";
import * as helpers from "../../utils/helpers";

describe("<Editor />", () => {
  test("renders without crashing", () => {
    const fakeStore = {
      getState: () => ({
        app: {
          activeNote: false
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    const wrapper = shallow(<Editor store={fakeStore} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should render editor when there is a active note ", () => {
    let fakeStore = {
      getState: () => ({
        app: {
          activeNote: notes[0]
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    const wrapper = mount(<Editor store={fakeStore} />);
    expect(wrapper.find(".editor-header").exists()).toBe(true);
  });
  test("should set states on change the input", () => {
    const fakeStore = {
      getState: () => ({
        app: {
          activeNote: notes[0]
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    const wrapper = mount(shallow(<Editor store={fakeStore} />).get(0));
    wrapper
      .find(".textarea")
      .simulate("change", { target: { name: "body", value: "simple text" } });
    expect(wrapper.state().body).toEqual("simple text");
  });
  test("should update the note when save button clicked", () => {
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          activeNote: notes[0]
        }
      }),
      dispatch: action => dispatchedActions.push(action),
      subscribe: jest.fn()
    };
    const wrapper = mount(<Editor store={fakeStore} />);
    wrapper
      .find(".textarea")
      .simulate("change", { target: { name: "body", value: "simple text" } });
    wrapper.find(".btn.save").simulate("click");
    expect(dispatchedActions).toContainEqual(
      actions.updateNote({
        id: notes[0].id,
        body: "simple text",
        categoryId: notes[0].categoryId,
        date: helpers.getNow()
      })
    );
  });
  test("should delete the note when delete button clicked", () => {
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          activeNote: notes[0],
          notes
        }
      }),
      dispatch: action => dispatchedActions.push(action),
      subscribe: jest.fn()
    };
    const wrapper = mount(<Editor store={fakeStore} />);
    wrapper.find(".btn.delete").simulate("click");
    expect(dispatchedActions).toContainEqual(actions.deleteNote(notes[0].id));
  });
});
