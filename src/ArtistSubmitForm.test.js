import React from "react";
// import { render } from '@testing-library/react';
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ArtistSubmitForm from "./ArtistSubmitForm";
import axios from "axios";

jest.mock("axios");

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<ArtistSubmitForm />);
  const appComponent = wrapper.find(
    "[data-test='component-artist-submit-form']"
  );
  expect(appComponent.length).toBe(1);
});

test("clicking 'submit' invokes 'submitArtist' function", () => {
  const getSpy = jest.spyOn(axios, "get");
  const wrapper = shallow(<ArtistSubmitForm />);
  const button = wrapper.find("[data-test='submit-button']");
  button.simulate("click");
  expect(getSpy).toBeCalled();
});
