    
    
    Feature: LOGIN - Contact made Abort No Access
    
    Scenario Outline: Logging in to job's "Work Order" window
        Given FTwenty the Login Page
        When FTwenty I pass "<Username>" and "<Password>"
        Then FTwenty I click Login button
        And FTwenty I should see the Appointment List

        Examples:
            | Username    | Password    |
            | Automation2 | Aut0m4t1on2 |