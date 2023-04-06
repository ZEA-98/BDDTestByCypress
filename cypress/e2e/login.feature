Feature: Login To Aplication 

As a valid user 
I want to login into Aplications 

Scenario: valid login 
    Given I open login page
    When I submit login 
    Then I should see homepage