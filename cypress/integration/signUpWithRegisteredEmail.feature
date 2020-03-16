Feature: Edit Profile
After user login user need to update their profile

Background: User login
    Given user open sehatQ login page
    When user input email
    Then user input password
    Then user click Continue button
    # And verify user login

Scenario: Update profile
#  Given after login success user click BOD field
#   When select date
#   Then click Continue button
  Then click edit profile button
  Then change name
  Then edit DOB
#   Then chenge gender
  Then input height max 3 chars
  Then input weight max 3 chars
  Then input address
  Then input phone number
  Then click Simpan button