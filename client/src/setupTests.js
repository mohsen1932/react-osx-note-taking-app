import React from "react";
import Enzyme, { shallow, render, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as constants from "./constants";
import * as actions from "./actions";

configure({ adapter: new Adapter() });

const notes = [
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
  },
  {
    id: 3,
    body: "rezA",
    categoryId: 1,
    date: "2019-09-01 21:11"
  }
];
const categories = [
  {
    id: 1,
    title: "Default Category"
  },
  {
    id: 2,
    title: "2nd Category"
  },
  {
    id: 3,
    title: "3rd Category"
  }
];

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.constants = constants;
global.actions = actions;
global.notes = notes;
global.categories = categories;
