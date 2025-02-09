import { act, cleanup, screen, waitFor } from "@testing-library/react";
import { Header } from "./Header";
import "@testing-library/jest-dom";
import { render } from "@/tests/render";

afterEach(() => {
  cleanup();
});

// Helper function to resize window
const resizeWindow = (width: number) => {
  act(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    });
    window.dispatchEvent(new Event("resize"));
  });
};

describe("Header Component", () => {
  it("displays heading on large screens", () => {
    render(<Header />);
    resizeWindow(1024);

    waitFor(() => {
      const appName = screen.queryByRole("heading", { name: "Yummy Hunt" });
      expect(appName).toBeInTheDocument();
      expect(appName).toBeVisible();
    });
  });

  it("hides heading on small screens", () => {
    render(<Header />);
    resizeWindow(500);

    waitFor(() => {
      const appName = screen.queryByRole("heading", { name: "Yummy Hunt" });
      expect(appName).toBeInTheDocument();
      expect(appName).not.toBeVisible();
    });
  });
});
