import NotesSideBar from "./index";

describe("<NotesSideBar />", () => {
  test("renders without crashing", () => {
    const fakeStore = {
      getState: () => ({
        app: {
          notes
        }
      }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    };
    const wrapper = shallow(<NotesSideBar store={fakeStore} />);
    expect(wrapper.exists()).toBe(true);
  });
});
