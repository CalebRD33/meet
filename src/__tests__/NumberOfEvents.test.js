import NumberOfEvents from "../components/NumberOfEvents";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe('<NumberOfEvents /> component', () => {
    let EventNumberComponent;
    beforeEach(() => {
        EventNumberComponent = render(<NumberOfEvents setCurrentNOE={() => {}} />);
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
    });
});

describe('<NumberOfEvents /> integration' , () => {
    test('render number of events matching user input', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
    
        const numberOfEventsDOM = AppDOM.querySelector('#number-of-events');
        const numberOfEventsInput = within(numberOfEventsDOM).queryByRole('textbox');
        await user.type(numberOfEventsInput, '{backspace}{backspace}10');
        
        const EventListDOM = AppDOM.querySelector('#event-list');
        await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(10);
          });
    });
});