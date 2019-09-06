import CategoriesList from "./index";
import * as helpers from "../../../utils/helpers";

describe("<CategoriesList />", () => {
  test("renders connected", () => {
    const fakeStore = {
      getState: () => ({
        app: {
          categories
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    const wrapper = shallow(<CategoriesList store={fakeStore} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should render categories list with mock data", () => {
    const fakeStore = {
      getState: () => ({
        app: {
          categories
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    const wrapper = mount(<CategoriesList store={fakeStore} />);
    expect(wrapper.find(".category-title").get(0).props.children).toEqual(
      categories[0].title
    );
    expect(wrapper.find(".category-title").get(0).props.children).toEqual(
      categories[0].title
    );
    expect(wrapper.find(".category-title").length).toEqual(categories.length);
  });
  test("should set active category by clicking on each item", () => {
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          activeCategory: false,
          activeCategoryNotes: [],
          categories,
          notes
        }
      }),
      dispatch: action => dispatchedActions.push(action),
      subscribe: jest.fn()
    };
    const wrapper = mount(
      <CategoriesList store={fakeStore} onSelect={jest.fn()} />
    );
    wrapper.find(".item-2").simulate("click");
    expect(dispatchedActions).toContainEqual(
      actions.setActiveCategory(categories[1])
    );
    const result = helpers.filterCategoryItems(notes, categories[1]);
    expect(dispatchedActions).toContainEqual(actions.setCategoryItems(result));
    expect(dispatchedActions).toContainEqual(actions.setActiveNote(false));
  });
});
