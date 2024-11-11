Feature: F01-Acceder al blog con contraseña

@user1 @web
Scenario: F01-E1-Escenario positivo - Configurar contraseña
    Given I open the browser
    When I navigate to "http://localhost:2368/ghost/"
    When I enter username "ma.rodriguezs123456@uniandes.edu.co" and password "Alejandro.123" and press enter
    Then I should be redirected to the dashboard
    When I navigate to "http://localhost:2368/ghost/#/settings"
    When I click the link with id "locksite"
    Then I should be on the page with URL "http://localhost:2368/ghost/#/settings/locksite"

@user2 @web
Scenario: F01-E2-Escenario positivo - Acceder al sitio con contraseña correcta
    Given I open the browser
    When I navigate to "http://localhost:2368/ghost/"
    When I enter username "ma.rodriguezs123456@uniandes.edu.co" and password "Alejandro.123" and press enter
    Then I should be redirected to the dashboard
    When I navigate to "http://localhost:2368/private/?r=%2F"
    Then I enter "Alejandro.123" into the input with name "password" and press enter

@user3 @web
Scenario: F01-E3-Escenario Negativo - Acceder al sitio con contraseña incorrecta
    Given I open the browser
    When I navigate to "http://localhost:2368/ghost/"
    When I enter username "ma.rodriguezs123456@uniandes.edu.co" and password "Alejandro.123" and press enter
    Then I should be redirected to the dashboard
    When I navigate to "http://localhost:2368/private/?r=%2F"
    Then I enter "Prueba.123" into the input with name "password" and press enter