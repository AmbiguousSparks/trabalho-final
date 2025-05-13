import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { DS_Button } from '.';
import { FaSignInAlt } from 'react-icons/fa';

describe("Components/Button", () => {
    it("should render with children text", () => {
        render(<DS_Button state='primary' size='default'>Entrar</DS_Button>)
        expect(screen.getByText("Entrar")).toBeTruthy()
    })

    it("should render with left icon", () => {
        render(
            <DS_Button size='ultra-large' state='accent' leftIcon={<FaSignInAlt />}>Entrar</DS_Button>
        )
        expect(screen.getByTestId("left-icon")).toBeTruthy();
        expect(screen.getByText("Entrar")).toBeTruthy();
    });

    it("should handle click event", async () => {
        const handleClick = vi.fn();

        render(
            <DS_Button size='default' state='accent' onClick={handleClick}>Test button</DS_Button>
        )

        const element = screen.getByText("Test button");

        expect(element).toBeDefined();

        await waitFor(() => fireEvent.click(element));

        expect(handleClick).toHaveBeenCalled();
    });

    it("should take a snapshot", () => {
        const { asFragment } = render(<DS_Button state='primary' size='large'>Entrar</DS_Button>)

        expect(asFragment()).toMatchSnapshot();
    });
});
