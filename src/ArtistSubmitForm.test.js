import React from "react";
// import { render } from '@testing-library/react';
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ArtistSubmitForm from "./ArtistSubmitForm";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<ArtistSubmitForm />);
  const appComponent = wrapper.find(
    "[data-test='component-artist-submit-form']"
  );
  expect(appComponent.length).toBe(1);
});
