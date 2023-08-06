import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(
      getByText("This site is used as main welcome page for users visit.")
    ).toBeInTheDocument();
  });
});
