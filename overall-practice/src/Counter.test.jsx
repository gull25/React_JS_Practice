import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments count when button is clicked", () => {
  render(<Counter />);

  const button = screen.getByText("Increase");

  fireEvent.click(button);

  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});