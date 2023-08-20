import { render, screen } from "@testing-library/react";
import MainPage from ".";

describe("Main", () => {
  it("should render correctly", () => {
    render(<MainPage />);
    expect(
      screen.getByText("Walcron's Microfrontend - Zelda version")
    ).toBeInTheDocument();
    expect(screen.getByText("NPM shared library")).toBeInTheDocument();
  });
});
