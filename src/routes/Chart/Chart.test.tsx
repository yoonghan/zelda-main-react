import { render, screen } from "@testing-library/react";
import Chart from ".";

describe("Chart", () => {
  it("should render component correctly", () => {
    render(<Chart />);
    expect(screen.getByText("This is an empty chart")).toBeInTheDocument();
  });
});
