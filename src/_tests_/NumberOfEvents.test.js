import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render text input correctly", () => {
    const NumberOfEvents = NumberOfEventsWrapper.state("NumberOfEvents");
    expect(
      NumberOfEventsWrapper.find("#NumberOfEvents-input").prop("value")
    ).toBe(NumberOfEvents);
  });

  test("update state when input is changed", () => {
    const eventObject = { target: { value: 20 } };
    NumberOfEventsWrapper.find("#NumberOfEvents-input").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("NumberOfEvents")).toBe(20);
  });

  test("render label with numer of events", () => {
    expect(NumberOfEventsWrapper.find(".NumberOfEvents label")).toHaveLength(1);
  });
});
