import React from "react";
// import { render } from '@testing-library/react';
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("tempArtistName starts as empty string", () => {
  const wrapper = shallow(<App />);
  let initialTempArtistState = wrapper.state("tempArtistName");
  expect(initialTempArtistState).toBe("");
});
