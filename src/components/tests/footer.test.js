import React from "react";
import { shallow } from "enzyme";
import Footer from "../footer";

describe("Footer component", function() {
  let component;
  beforeEach(function() {
    component = shallow(<Footer />);
  });
  it("should render without error", function() {
    const wrapper = component.find('[data-test="footerComponent"]');
    expect(wrapper.length).toBe(1);
  });
  it("should have text", function() {
    const wrapper = component.find('[data-test="footerComponentText"]');
    expect(wrapper.text()).toBe("Services.History.Contact");
  });
  it("navigate to goggle on click of footer", function() {
    window.location.assign = jest.fn();
    const footerNavigation = jest.fn();
    const wrapper = component.find("h2");
    wrapper.simulate("click");
    expect(footerNavigation).toHaveBeenCalled();
  });
});
