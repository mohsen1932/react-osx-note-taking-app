import NotesList from "./index";
import * as helpers from "../../../utils/helpers";

describe("<NotesList />", () => {
  test("renders connected", () => {
    const fakeStore = {
      getState: () => ({
        app: {
          notes
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    const wrapper = shallow(<NotesList store={fakeStore} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should render notes list with mock data", () => {
    const fakeStore = {
      getState: () => ({
        app: {
          notes
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    const wrapper = mount(<NotesList store={fakeStore} />);
    expect(wrapper.find(".note-date").get(1).props.children).toEqual(
      notes[1].date
    );
    expect(wrapper.find(".note-title").get(2).props.children).toEqual(
      helpers.getNoteTitle(notes[2].body)
    );
  });
  test("should set active note by clicking on each item", () => {
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          activeNote: false,
          notes
        }
      }),
      dispatch: action => dispatchedActions.push(action),
      subscribe: jest.fn()
    };
    const wrapper = mount(<NotesList store={fakeStore} onSelect={jest.fn()} />);
    wrapper.find(".item-2").simulate("click");
    expect(dispatchedActions).toContainEqual(actions.setActiveNote(notes[1]));
  });
});
