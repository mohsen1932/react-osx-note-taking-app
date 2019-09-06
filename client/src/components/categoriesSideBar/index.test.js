import CategoriesSideBar from "./index";

describe("<CategoriesSideBar />", () => {
  test("renders without crashing", () => {
    const wrapper = shallow(<CategoriesSideBar />);
    expect(wrapper.exists()).toBe(true);
  });
});
