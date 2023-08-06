import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "./appRoute";
import React from "react";

describe("appRoute", () => {
  const Wrapper = ({ goto }: { goto: string[] }) => {
    const router = createMemoryRouter(routes, { initialEntries: goto });
    return <RouterProvider router={router} />;
  };

  it("should show exception when the route is not valid", () => {
    render(<Wrapper goto={["/isnotvalid"]} />);
    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });

  it("should show be able to navigate to root", () => {
    render(<Wrapper goto={["/"]} />);
    expect(screen.queryByText("Not Found")).not.toBeInTheDocument();
  });

  it("should show be able to navigate to about", () => {
    render(<Wrapper goto={["/about"]} />);
    expect(screen.queryByText("Not Found")).not.toBeInTheDocument();
  });
});
