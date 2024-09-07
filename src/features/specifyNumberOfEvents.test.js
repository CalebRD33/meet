import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {                  
        given('The user hasn\'t specified the number of events', () => {                                                      
                                                                                                                             
        });                                                                                                                   
        let AppComponent;                                                                                                                    
        when('the app is opened', () => {                                                                                 
            AppComponent = render(<App />);                                                                                                                
        });                                                                                                                   

        then('32 events are shown by default', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {
        let AppDOM;
        given('The user has opened the app', () => {
            AppDOM = render(<App />).container.firstChild;
        });

        when('The user changes the number of events', async () => {
            const user = userEvent.setup();
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const numberOfEvents = within(NumberOfEventsDOM).queryByRole('textbox');
            await user.type(numberOfEvents, '{backspace}{backspace}10');
        });

        then('That same number of events should be shown', async () => { 
            const EventListDOM = AppDOM.querySelector('#event-list')            
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(10);
            });
        });
    });
});