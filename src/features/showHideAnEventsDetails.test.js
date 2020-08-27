// import React from "react";
// import App from "../App";
// import { loadFeature, defineFeature } from "jest-cucumber";
// import { mount } from "enzyme";
// import { mockEvents } from "../mock-events";

// const feature = loadFeature(
//   "./src/features/showHideAnEventsDetails.feature.txt"
// );

// defineFeature(feature, (test) => {
//   test("An event element is collapsed by default", ({
//     given,
//     and,
//     when,
//     then,
//   }) => {
//     given("the list of events has been loaded", () => {});

//     let AppWrapper;

//     and("app loaded", () => {
//       AppWrapper = mount(<App />);
//     });

//     when("the user did not click the „Show Details“ yet", () => {
//       AppWrapper.update();
//       expect(AppWrapper.find(".event")).toHaveLength(mockEvents.events.length);
//     });

//     then("the event elements are collapsed", () => {
//       expect(AppWrapper.find("showDetails")).toHaveLength(0);
//     });
//   });

//   test("User can expand an event to see its details", ({
//     given,
//     and,
//     when,
//     then,
//   }) => {
//     let AppWrapper;

//     given("app loaded", () => {
//       AppWrapper = mount(<App />);
//     });

//     and("the list of events has been loaded", () => {
//       AppWrapper.update();
//       expect(AppWrapper.find(".event")).toHaveLength(mockEvents.events.length);
//     });

//     when("the user clicks the button „show Details“", () => {
//       AppWrapper.find(".event .details-btn").at(0).simulate("click");
//     });

//     then("the event element should expand and show more information", () => {
//       expect(AppWrapper.find(".event .event__Details")).toHaveLength(1);
//     });
//   });

//   test("User can collapse an event to hide its details", ({
//     given,
//     and,
//     when,
//     then,
//   }) => {
//     let AppWrapper;

//     given("the user opens the app", () => {
//       AppWrapper = mount(<App />);
//     });

//     and("the user has finished reading the details of an event", () => {
//       AppWrapper.update();
//       AppWrapper.find(".event .details-btn").at(0).simulate("click");
//       expect(AppWrapper.find(".event .event__Details")).toHaveLength(1);
//     });

//     when("the user clicks on the event again", () => {
//       AppWrapper.find(".event .details-btn").at(0).simulate("click");
//     });

//     then("the event elements are collapsed", () => {
//       expect(AppWrapper.find(".event .event__Details")).toHaveLength(0);
//     });
//   });
// });
import React from "react";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import { mockEvents } from "../mock-events";

const feature = loadFeature(
  "./src/features/showHideAnEventsDetails.feature.txt"
);

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({
    given,
    and,
    when,
    then,
  }) => {
    given("the list of events has been loaded", () => {});

    let AppWrapper;

    and("app loaded", () => {
      AppWrapper = mount(<App />);
    });

    when("the user did not click the „Show Details“ yet", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockEvents.events.length);
    });

    then("the event elements are collapsed", () => {
      expect(AppWrapper.find("showDetails")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;

    given("app loaded", () => {
      AppWrapper = mount(<App />);
    });

    and("the list of events has been loaded", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockEvents.events.length);
    });

    when("the user clicks the button „show Details“", () => {
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
    });

    then("the event element should expand and show more information", () => {
      expect(AppWrapper.find(".event .event__Details")).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;

    given("the user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    and("the user has finished reading the details of an event", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
      expect(AppWrapper.find(".event .event__Details")).toHaveLength(1);
    });

    when("the user clicks on the event again", () => {
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
    });

    then("the event elements are collapsed", () => {
      expect(AppWrapper.find(".event .event__Details")).toHaveLength(0);
    });
  });
});
