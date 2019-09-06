import CreateNewCategoryForm from "./index";
import * as helpers from "../../../utils/helpers";

describe("<CreateNewCategoryForm />", () => {
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
    const wrapper = shallow(<CreateNewCategoryForm store={fakeStore} />);
    expect(wrapper.exists()).toBe(true);
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
    let wrapper = mount(<CreateNewCategoryForm store={fakeStore} />);
    expect(wrapper.find(".form-btn").props().disabled).toBe(true);
    fakeStore = {
      getState: () => ({
        app: {
          loading: false
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    wrapper = mount(<CreateNewCategoryForm store={fakeStore} />);
    expect(wrapper.find(".form-btn").props().disabled).toBe(false);
  });
  test("should set states on change the input", () => {
    const fakeStore = {
      getState: () => ({
        app: {
          activeCategory: false,
          categories,
          loading: false
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    const wrapper = mount(
      shallow(<CreateNewCategoryForm store={fakeStore} />).get(0)
    );
    wrapper
      .find(".form-input")
      .simulate("change", { target: { name: "title", value: "title" } });
    expect(wrapper.state().title).toEqual("title");
  });
  test("should validate the input before submitting", () => {
    const fakeStore = {
      getState: () => ({
        app: {
          activeCategory: false,
          categories,
          loading: false
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    const wrapper = mount(<CreateNewCategoryForm store={fakeStore} />);
    wrapper.find(".form-btn").simulate("click");
    expect(wrapper.find(".error-block.title").exists()).toBe(true);
  });
  test("should create a new Category when button clicked", () => {
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          activeCategory: false,
          categories,
          loading: false
        }
      }),
      dispatch: action => dispatchedActions.push(action),
      subscribe: jest.fn()
    };
    const wrapper = mount(<CreateNewCategoryForm store={fakeStore} />);
    wrapper
      .find('input[name="title"]')
      .simulate("change", { target: { name: "title", value: "title" } });
    wrapper.find(".form-btn").simulate("click");
    expect(dispatchedActions).toContainEqual(actions.addCategory("title"));
  });
});
