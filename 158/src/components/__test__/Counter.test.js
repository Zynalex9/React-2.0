import { render, screen,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event"; // Import userEvent
import { Counter } from "../Counter";

describe("Counter component tests", () => {
  test("Render the textarea", () => {
    const { getByTestId } = render(<Counter />);
    const textArea = getByTestId("textArea");
    expect(textArea).toBeTruthy();
  });

  it("Render the character result", () => {
    const { getByTestId } = render(<Counter />);
    const charLength = getByTestId("charLength");
    expect(charLength.innerHTML).toBe("Character: 0");
  });

  test("Render the word result", () => {
    render(<Counter />);
    const wordLength = screen.getByText("Word: 0");
    expect(wordLength).toBeTruthy();
  });

  test("change textarea and update result", () => {
    render(<Counter />);
    const textArea = screen.getByTestId("textArea");
    const charLength = screen.getByTestId("charLength");
    const wordLength = screen.getByTestId("wordLength");

    userEvent.type(textArea, "Zain");

    expect(charLength.innerHTML).toBe("Character: 4");

    expect(wordLength.innerHTML).toBe("Word: 1");
  });
  test("clear textarea and update result", () => {
    render(<Counter />);
    const textArea = screen.getByTestId("textArea");
    const clearBtn = screen.getAllByTestId("clearBtn");
    const charLength = screen.getByTestId("charLength");
    const wordLength = screen.getByTestId("wordLength");

    userEvent.type(textArea, "Zain");
    expect(charLength.innerHTML).toBe("Character: 4");
    expect(wordLength.innerHTML).toBe("Word: 1");

    fireEvent.click(clearBtn[0]);
    expect(charLength.innerHTML).toBe("Character: 0");
    expect(wordLength.innerHTML).toBe("Word: 0");
  });
});
