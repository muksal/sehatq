Feature: Sign in
As a user already registered on sehatQ user want to try to login 

Scenario: User want to login to sehatQ with email
    Given user open sehatQ login page
    When user input email
    Then user input password
    Then user click Continue button
    And verify user login

# cant run since the username is not valid
# Scenario: User want to login to sehatQ with username
#     Given user open sehatQ login page
#     When user input username
#     Then user input password
#     Then user click Continue button
#     And verify user login

Scenario: User want to login to sehatQ with invalid email
    Given user open sehatQ login page
    When user input not register email
    Then user input password
    Then user click Continue button
    And verify user login failure

Scenario: User want to login to sehatQ with invalid password
    Given user open sehatQ login page
    When user input email
    Then user input invalid password
    Then user click Continue button
    And verify user login failure with invalid password