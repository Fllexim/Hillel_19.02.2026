import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Todo App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("should render Todo List title", () => {
    expect(
      screen.getByRole("heading", { name: /todo list/i }),
    ).toBeInTheDocument();
  });

  test("should allow typing letters and numbers", () => {
    const input = screen.getByPlaceholderText("Enter task");

    fireEvent.change(input, {
      target: { value: "React123" },
    });

    expect(input.value).toBe("React123");
  });

  test("should show Required error", async () => {
    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(await screen.findByText("Required")).toBeInTheDocument();
  });

  test("should add new todo", async () => {
    const input = screen.getByPlaceholderText("Enter task");

    fireEvent.change(input, {
      target: { value: "Learn React" },
    });

    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(await screen.findByText("Learn React")).toBeInTheDocument();
  });

  test("should show minimum length error", async () => {
    const input = screen.getByPlaceholderText("Enter task");

    fireEvent.change(input, {
      target: { value: "abc" },
    });

    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(await screen.findByText("Minimum 5 symbols")).toBeInTheDocument();
  });
});
