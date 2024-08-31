import Event from "../components/Event";
import { render } from "@testing-library/react";
import { getEvents } from "../api";
import { mockData } from "../mock-data";
import userEvent from "@testing-library/user-event";

describe('<Event /> component', () => {
    let EventComponent;
    const event = mockData[0];
    beforeEach(() => {
        EventComponent = render(<Event event={event} />);
    })

    test('render event title', async () => {
        const allEvents = await getEvents();
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test('render event start time', async () => {
        const allEvents = await getEvents();
        expect(EventComponent.queryByText(allEvents[0].start.dateTime)).toBeInTheDocument();
    });

    test('render event location', async () => {
        const allEvents = await getEvents();
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('render show details button', () => {
        expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
    });

    test('by default, event details should be hidden', () => {
        const eventDetails = EventComponent.container.querySelector('.details');
        expect(eventDetails).not.toBeInTheDocument();
    });

    test("show details when the user clicks the 'show details' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Show Details');
        await user.click(button);
        const details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument;
    });

    test("hide details when the user clicks the 'hide details' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Hide Details');
        await user.click(button);
        const details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument;
    })

});