import NotesHeader from "./index";
import * as helpers from "../../../utils/helpers";

describe("<NotesHeader />", () => {
  test("renders without crashing", () => {
    const fakeStore = {
      getState: () => ({
        app: {
          loading: false
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    const wrapper = shallow(<NotesHeader store={fakeStore} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should render the note list title with mock data", () => {
    let fakeStore = {
      getState: () => ({
        app: {
          activeCategory: false,
          notes,
          keyword: "keyword",
          loading: false
        }
      }),
      dispatch: action => jest.fn(),
      subscribe: jest.fn()
    };
    let wrapper = mount(<NotesHeader store={fakeStore} />);
    expect(wrapper.find(".notes-list-title").get(0).props.children).toEqual(
      `Search Result for keyword:`
    );
    fakeStore = {
      getState: () => ({
        app: {
          activeCategory: false,
          notes,
          keyword: false,
          loading: false
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    wrapper = mount(<NotesHeader store={fakeStore} />);
    expect(wrapper.find(".notes-list-title").get(0).props.children).toEqual(
      "All Notes:"
    );
    fakeStore = {
      getState: () => ({
        app: {
          activeCategory: categories[0],
          notes,
          keyword: false,
          loading: false
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    wrapper = mount(<NotesHeader store={fakeStore} />);
    expect(wrapper.find(".notes-list-title").get(0).props.children).toEqual(
      `${categories[0].title} Notes:`
    );
  });
  test("disable/enable button with loading props", () => {
    let fakeStore = {
      getState: () => ({
        app: {
          loading: true
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    let wrapper = mount(<NotesHeader store={fakeStore} />);
    expect(wrapper.find(".btn").props().disabled).toBe(true);
    fakeStore = {
      getState: () => ({
        app: {
          loading: false
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    wrapper = mount(<NotesHeader store={fakeStore} />);
    expect(wrapper.find(".btn").props().disabled).toBe(false);
  });
  test("should create a new note when button clicked", () => {
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          activeNote: false,
          activeCategory: categories[0],
          notes,
          loading: false
        }
      }),
      dispatch: action => dispatchedActions.push(action),
      subscribe: jest.fn()
    };
    const wrapper = mount(<NotesHeader store={fakeStore} />);
    wrapper.find(".btn").simulate("click");
    expect(dispatchedActions).toContainEqual(
      actions.addNote("UnTitled", categories[0].id, helpers.getNow())
    );
  });
});
