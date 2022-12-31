import * as React from "react";
import { render } from "@testing-library/react";
import Loader from "./loader";

const mockedProps = {
  bgColor: "black",
  color: "white"
};
const setup = () => {
  return render(<Loader />);
};

afterEach(() => {
  jest.clearAllMocks();
});

describe("Loader", () => {
  it("should match snapshots", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
