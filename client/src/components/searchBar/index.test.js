import SearchBar from "./index";
import * as helpers from "../../utils/helpers";

describe("<SearchBar />", () => {
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
    const wrapper = shallow(<SearchBar store={fakeStore} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("disable/enable input with loading props", () => {
    let fakeStore = {
      getState: () => ({
        app: {
          loading: true
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    let wrapper = mount(<SearchBar store={fakeStore} />);
    expect(wrapper.find(".form-input").props().disabled).toBe(true);
    fakeStore = {
      getState: () => ({
        app: {
          loading: false
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    wrapper = mount(<SearchBar store={fakeStore} />);
    expect(wrapper.find(".form-input").props().disabled).toBe(false);
  });
  test("should search in notes list on change the input", () => {
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          keyword: false,
          notes,
          loading: false,
          searchResult: []
        }
      }),
      dispatch: action => dispatchedActions.push(action),
      subscribe: jest.fn()
    };
    const wrapper = mount(<SearchBar store={fakeStore} />);
    wrapper
      .find(".form-input")
      .simulate("change", { target: { name: "keyword", value: "mo" } });
    const result = helpers.searchInNotesArray(notes, "mo");
    expect(dispatchedActions).toContainEqual(
      actions.setSearchResult("mo", result)
    );
    wrapper
      .find(".form-input")
      .simulate("change", { target: { name: "keyword", value: "" } });
    expect(dispatchedActions).toContainEqual(
      actions.setSearchResult(false, [])
    );
  });
});
