import React from "react";
import { shallow } from "enzyme";
import FormComponent from "./FormComponent";

describe("FormComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
