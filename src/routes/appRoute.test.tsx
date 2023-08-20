import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "./appRoute";

describe("appRoute", () => {
  const Wrapper = ({ goto }: { goto: string[] }) => {
    const router = createMemoryRouter(routes, { initialEntries: goto });
    return <RouterProvider router={router} />;
  };

  const assertPageIsRoutable = (uri: string) => {
    render(<Wrapper goto={[uri]} />);
    expect(screen.queryByText("Not Found")).not.toBeInTheDocument();
  };

  it("should show exception when the route is not valid", () => {
    render(<Wrapper goto={["/isnotvalid"]} />);
    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });

  it("should be able to navigate to valid routes", () => {
    assertPageIsRoutable("/");
    assertPageIsRoutable("/about");
    assertPageIsRoutable("/chart");
  });
});
