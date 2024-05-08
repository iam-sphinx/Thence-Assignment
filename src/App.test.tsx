import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./pages/DashboardPage";

test("renders learn react link", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
