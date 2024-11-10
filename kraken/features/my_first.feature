Feature: Create draft page

@user1 @web
Scenario: Create a draft page successfully
  Given I navigate to page "http://localhost:2368/ghost/"
  And I enter email 'alejandro.rs'
  And I enter password "<PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds