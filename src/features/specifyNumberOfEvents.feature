Feature: Specify Number of Events
    Scenario: When user hasn’t specified a number, 32 events are shown by default
        Given The user hasn't specified the number of events
        When The app is opened
        Then 32 events are shown by default
    Scenario: User can change the number of events displayed
        Given The user has opened the app
        When The user changes the number of events
        Then That same number of events should be shown