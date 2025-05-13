import { render, screen, fireEvent } from "@testing-library/react";
import { DS_Input } from "./index";
import { describe, expect, it, vitest } from "vitest";
import '@testing-library/jest-dom';

describe("Components/Input", () => {
  const label = "Usuário";
  const errorMessage = "Campo obrigatório";

  it("renders the input and label", () => {
    render(<DS_Input label={label} value="" id="test" />);
    expect(screen.getByLabelText(label)).toBeDefined();
    expect(screen.getByText(label)).toBeDefined();
  });

  it("shows the error message when hasError is true", () => {
    render(<DS_Input label={label} value="" hasError errorMessage={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeDefined();
  });

  it("does not show the error message when hasError is false", () => {
    render(<DS_Input label={label} value="" hasError={false} errorMessage={errorMessage} />);
    expect(screen.queryByText(errorMessage)).toBeNull();
  });

  it("floats the label when input is focused", () => {
    render(<DS_Input label={label} value="" id="test" />);
    const input = screen.getByLabelText(label);
    fireEvent.focus(input);
    // The label should have the floating class or prop
    const labelEl = screen.getByTestId("test-label");
    expect(labelEl).toBeDefined();
    expect(labelEl).toHaveStyle("top: -20px");
  });

  it("floats the label when input has value", () => {
    render(<DS_Input label={label} value="test" />);
    const labelEl = screen.getByText(label);
    expect(labelEl).toBeDefined();
    expect(labelEl).toHaveStyle("top: -20px");
  });

  it("calls onFocus and onBlur handlers", () => {
    const onFocus = vitest.fn();
    const onBlur = vitest.fn();
    render(<DS_Input label={label} value="" onFocus={onFocus} onBlur={onBlur} id="teste" />);
    const input = screen.getByLabelText(label);
    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });

  it("should take a snapshot", () => {
    const { asFragment } = render(<DS_Input label={label} value="" id="teste" />);

    expect(asFragment()).toMatchSnapshot();
  });
});