# Meet App
The app is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Feature 1: Filter Events by City
As a user,
I should be able to filter events by city
so that I can see a list of events taking place in that city.

### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities

- Given: user hasn’t searched for any city
- When: the user opens the app
- Then: the user should see a list of upcoming events.

### Scenario 2: User should see a list of suggestions when they search for a city

- Given: the main page is open
- When: user starts typing in the city textbox
- Then: the user should receive a list of cities (suggestions) that match what they’ve typed.

### Scenario 3: User can select a city from the suggested list

- Given: user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- When: the user selects a city (ex. “Berlin, Germany”) from the list;
- Then: their city should be changed to that city (ex. “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

## Feature 2: Show/Hide Event Details
As a user, 
I should be able to click on a button
So that I can see the the details of the event.

### Scenario 1: An event element is collapsed by default

- Given: The user has found an event they would like to see details about
- When: The user is searching for events
- Then: The event element is collapsed by default

### Scenario 2:  User can expand an event to see details

- Given: The user wants to see more details about an event
- When: The user clicks on the element
- Then: The element expands to show details

### Scenario 3:  User can collapse an event to hide details

- Given: The user wants to hide the details
- When: The user clicks on the element
- Then: The element collapses to hide details 

## Feature 3: Specify Number of Events
As a user,
I should be able to specify the number of events to be shown
So that I can view that specific number of events on the page.

### Scenario 1: When user hasn’t specified a number, 32 events are shown by default

- Given: The user hasn't specified the number of events
- When: The user is searching
- Then: 32 events are shown by default

### Scenario 2: User can change the number of events displayed.

- Given: The user has specified the number of events (ex. "10')
- When: The user is searching
- Then: That same number of events should be shown (ex. "10")

## Feature 4: Use the App When Offline
As a user,
I should be able to use the app without internet connection
So that I can still see previously viewed events and cached data.

### Scenario 1:

- Given: The user is using the app
- When: The user has no internet connection
- Then: Show cached data

### Scenario 2:

- Given: The user is viewing cached data without internet connection
- When: The user changes search settings (ex. city/number of events)
- Then: An error is shown

## Feature 5: Add an App Shortcut to the Home Screen
As a user,
I should be able to have an option to add the app as a shortcut
So that the app icon appears on the home screen.

### Scenario 1: User can install the meet app as a shortcut on their device home screen

- Given: The user is using the app on their device
- When: The user presses the "add shortcut to home screen"
- Then: The app will be shown as a shortcut on their home screen

## Feature 6: Display Charts Visualizing Event Details
As a user,
I should be able to click on a button
That shows a chart of upcoming events.

### Scenario 1: Show a chart with the number of upcoming events in each city

- Given: The user is viewing the event list page
- When: The user taps on a "View Charts" button
- Then: A chart will render with the number of upcoming events in each city

