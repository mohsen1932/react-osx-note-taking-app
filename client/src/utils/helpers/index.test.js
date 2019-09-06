import * as helpers from "./index";

describe("Helpers", () => {
  test("getNoteTitle", () => {
    let str = "123456789";
    let expectedResult = "123456789";
    expect(helpers.getNoteTitle(str)).toEqual(expectedResult);
    str = "1234567890000000";
    expectedResult = "1234567890...";
    expect(helpers.getNoteTitle(str)).toEqual(expectedResult);
  });
  test("searchInNotesArray", () => {
    const keyword = "o";
    const expectedResult = [
      {
        id: 1,
        body: "mOhsen",
        categoryId: 1,
        date: "2019-09-01 19:56"
      },
      {
        id: 2,
        body: "JohN",
        categoryId: 2,
        date: "2019-09-01 20:11"
      }
    ];
    expect(helpers.searchInNotesArray(notes, keyword)).toEqual(expectedResult);
  });
  test("deleteFromArray", () => {
    const id = 1;
    const expectedResult = [
      {
        id: 2,
        body: "JohN",
        categoryId: 2,
        date: "2019-09-01 20:11"
      },
      {
        id: 3,
        body: "rezA",
        categoryId: 1,
        date: "2019-09-01 21:11"
      }
    ];
    expect(helpers.deleteFromArray(notes, id)).toEqual(expectedResult);
  });
  test("filterCategoryItems", () => {
    const item = { id: 1 };
    const expectedResult = [
      {
        id: 1,
        body: "mOhsen",
        categoryId: 1,
        date: "2019-09-01 19:56"
      },
      {
        id: 3,
        body: "rezA",
        categoryId: 1,
        date: "2019-09-01 21:11"
      }
    ];
    expect(helpers.filterCategoryItems(notes, item)).toEqual(expectedResult);
  });
  test("updateArray", () => {
    const item = {
      id: 1,
      body: "lorem ipsum",
      categoryId: 1,
      date: "2019-09-01 19:56"
    };
    const expectedResult = [
      {
        id: 1,
        body: "lorem ipsum",
        categoryId: 1,
        date: "2019-09-01 19:56"
      },
      {
        id: 2,
        body: "JohN",
        categoryId: 2,
        date: "2019-09-01 20:11"
      },
      {
        id: 3,
        body: "rezA",
        categoryId: 1,
        date: "2019-09-01 21:11"
      }
    ];
    expect(helpers.updateArray(notes, item)).toEqual(expectedResult);
  });
  test("getNow", () => {
    const now = helpers.getNow();
    expect(typeof now).toEqual("string");
  });
});
