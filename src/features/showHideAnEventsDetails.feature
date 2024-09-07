Feature: Show/hide event details
    Scenario: An event element is collapsed by default
        Given the user has found an event they would like to see details about
        When the main page is open
        Then the event element is collapsed by default.

    Scenario: User can expand an event to see details
        Given the user wants to see more details about an event
        When The user clicks on the element
        Then The element expands to show details.

    Scenario: User can collapse an event to hide details
        Given The user wants to hide the details
        And the details are expanded
        When The user clicks on the element
        Then The element collapses to hide details