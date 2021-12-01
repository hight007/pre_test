import React from "react";
import { shallow } from "enzyme";
import Question2 from "./question2";

describe("Question2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Question2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
