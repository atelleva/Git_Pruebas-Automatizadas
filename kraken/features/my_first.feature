Feature: My feature

@user1 @web
Scenario: El usuario accede a la página de inicio
    Given I open the browser
    When I navigate to "http://localhost:2368/ghost/"
    When I enter username "ma.rodriguezs123456@uniandes.edu.co" and password "Alejandro.123" and press enter
    Then I should be redirected to the dashboard