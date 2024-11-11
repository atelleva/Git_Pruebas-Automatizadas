Feature: F02-Crear tags internos

@user1 @web
Scenario: F02-E1-Escenario positivo - Crear tag interno con datos completos
    Given I open the browser
    When I navigate to "http://localhost:2368/ghost/"
    When I enter username "ma.rodriguezs123456@uniandes.edu.co" and password "Alejandro.123" and press enter
    Then I should be redirected to the dashboard
    When I navigate to "http://localhost:2368/ghost/#/tags?type=internal"
    When I click the link with href "#/tags/new/"
    Then I should be on the page with URL "http://localhost:2368/ghost/#/tags/new"
    Then I enter nameTag "Prueba" and slug "SlugPrueb"

@user2 @web
Scenario: F02-E2-Escenario negativo - Crear tag interno con datos incompletos
    Given I open the browser
    When I navigate to "http://localhost:2368/ghost/"
    When I enter username "ma.rodriguezs123456@uniandes.edu.co" and password "Alejandro.123" and press enter
    Then I should be redirected to the dashboard
    When I navigate to "http://localhost:2368/ghost/#/tags?type=internal"
    When I click the link with href "#/tags/new/"
    Then I should be on the page with URL "http://localhost:2368/ghost/#/tags/new"
    Then I enter nameTag "" and slug "SlugPrueb"

@user3 @web
Scenario: F02-E3-Escenario negativo - Consultar tags internos creados
    Given I open the browser
    When I navigate to "http://localhost:2368/ghost/"
    When I enter username "ma.rodriguezs123456@uniandes.edu.co" and password "Alejandro.123" and press enter
    Then I should be redirected to the dashboard
    When I navigate to "http://localhost:2368/ghost/#/tags?type=internal"