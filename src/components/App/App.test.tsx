import { screen } from "@testing-library/react";
import App from "./App";
import { render } from "../../tests/render";

test("renders application", () => {
  render(<App />);
  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();
});
