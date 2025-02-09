import "@testing-library/jest-dom/vitest";

vi.stubGlobal("matchMedia", () => ({
  matches: false,
  addListener: vi.fn(),
  removeListener: vi.fn(),
}));
