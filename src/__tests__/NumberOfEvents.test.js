import NumberOfEvents from "../components/NumberOfEvents";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('<NumberOfEvents /> component', () => {
    let EventNumberComponent;
    beforeEach(() => {
        EventNumberComponent = render(<NumberOfEvents />);
    });

    test("render text input", () => {
        const numberOfEvents = EventNumberComponent.queryByRole('textbox');
        expect(numberOfEvents).toBeInTheDocument();
    });

    test('default value of the textbox is 32', () => {
        const numberOfEvents = EventNumberComponent.queryByRole('textbox');
        expect(numberOfEvents).toHaveValue('32');
    });

    test('textbox value changes according to user input', async () => {
        const numberOfEvents = EventNumberComponent.queryByRole('textbox');
        const user = userEvent.setup();
        await user.type(numberOfEvents, '{backspace}{backspace}10');
        expect(numberOfEvents).toHaveValue('10');

    })

})