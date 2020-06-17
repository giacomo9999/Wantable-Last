import React from "react";
// import { render } from '@testing-library/react';
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import BioDiscoList from "./BioDiscoList";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<BioDiscoList />);
  const appComponent = wrapper.find("[data-test='bio-disco-list']");
  expect(appComponent.length).toBe(1);
});
