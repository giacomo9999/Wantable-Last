import React from "react";
// import { render } from '@testing-library/react';
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import PossibleMatchesList from "./PossibleMatchesList";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(
    <PossibleMatchesList
      possibleArtists={["Frank Sinatra", "Frank Ocean", "Frank Jones"]}
    />
  );
  const appComponent = wrapper.find(
    "[data-test='component-possible-matches-list']"
  );
  expect(appComponent.length).toBe(1);
});
