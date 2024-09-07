import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user has found an event they would like to see details about', () => {
            
        });

        let AppComponent;
        when('the main page is open', () => {
            AppComponent = render(<App />);
        });

        then('the event element is collapsed by default.', async () => {
           const AppDOM = AppComponent.container.firstChild;
           const EventListDOM = AppDOM.querySelector('#event-list');

           await waitFor(() => {
                const EventListItems = EventListDOM.querySelector('.event');
                const details = EventListItems.querySelector('.details');
                expect(details).not.toBeInTheDocument();
            });
        });
    });

    test('User can expand an event to see details', ({ given, when, then }) => {
        
        
        let EventListDOM;
        given('the user wants to see more details about an event', () => {
            const AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
            
        });

        let EventListItems;
        let showDetailsButton;
        when('The user clicks on the element', async () => {
            await waitFor(() => {
                EventListItems = EventListDOM.querySelector('.event'); 
                showDetailsButton = EventListItems.querySelector('.show-details-btn');             
            }); 
            const user = userEvent.setup();
            await user.click(showDetailsButton);
                      
        });

        then('The element expands to show details.', () => {
            expect(EventListItems.querySelector('.hide-details-btn')).toBeInTheDocument(); 
            expect(EventListItems.querySelector('.details')).toBeInTheDocument(); 
        });
    });

    test('User can collapse an event to hide details', ({ given, and, when, then }) => {
        let EventListDOM;
        given('The user wants to hide the details', async () => {
            const AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
        });

        let EventListItems;
        let showDetailsButton;
        and('the details are expanded', async () => {
            await waitFor(() => {
                EventListItems = EventListDOM.querySelector('.event'); 
                showDetailsButton = EventListItems.querySelector('.show-details-btn');             
            }); 
            const user = userEvent.setup();
            await user.click(showDetailsButton);
            expect(EventListItems.querySelector('.details')).toBeInTheDocument();
        });

        when('The user clicks on the element', async () => {
            const user = userEvent.setup();
            const hideDetailsButton = EventListItems.querySelector('.hide-details-btn');  
            await user.click(hideDetailsButton);
        });

        then('The element collapses to hide details', () => {
            expect(EventListItems.querySelector('.details')).not.toBeInTheDocument();
        });
    });
});