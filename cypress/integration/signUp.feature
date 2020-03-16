Feature: Sign up with email
As a new user i want to create account on  SehatQ

Scenario: New user want to create account SehatQ
        Given new user open sign up page
        When user input full name
        Then user input email
        Then user input password
        Then user click show password
        Then user click checkbox on S&K
        And user click Continue button
        Then verify user

Scenario: Existing user want to recreate account SehatQ
        Given existing user open sign up page
        When user input full name
        Then user input email
        Then user input password
        Then user click show password
        Then user click checkbox on S&K
        And user click Continue button
        Then check error message

Scenario: User input not email format
        Given new user open sign up page
        When user input full name
        Then user input invalid email
        Then check invalid email error message