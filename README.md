# Git_Pruebas-Automatizadas
# Semana 5  - Pruebas de Extremo a Extremo
# Integrantes:  
Miguel Alejandro Rodríguez - ma.rodriguezs123456@uniandes.edu.co

Patricia Téllez - ap.tellezv1@uniandes.edu.co

Jhoan Felipe Sarmiento Ortiz jf.sarmiento23@uniandes.edu.co

# Kraken
## Instalación y Ejecución de Pruebas con Kraken
1. Se debe tener instalado Node.js y el manejador de paquetes npm
2. Instalar la herramienta con el comando : npm install kraken-node -g
3. Creación del proyecto : kraken-node gen
4. Se crea directorio features con dos subcarpetas web (pruebas entorno web), mobile (pruebas entornos moviles)
5. Como las pruebas de este curso están dirigidas a una aplicación web revisamos en el directorio web que se crean dos carpetas: step_definitions y support
6. En step_definitions encontramos el archivo step.js sirve para importar las funcionalidades
7. En la carpeta support encontramos los archivos hooks.js y support.js que se utilizan para las configuraciones de la herramienta que se va a probar
8. En el directorio features se encuentra el archivo my_first_feature.js que contiene las instrucciones para el escenario de prueba

# Cypress
## Instalación y Ejecución de Pruebas con Cypress

1. Se debe tener instalado Node.js y el manejador de paquetes npm
2. Instalar la herramienta con el comando : npm install -g cypress
3. Creación del proyecto cypress-test
4. En el archivo cypress.config.js asignar la url de Ghost por medio del atributo baseUrl
5. Configurar los credenciales de usuario y contraseña en cypress.config.js para autenticar en Ghost
6. Para los otros escenarios, configurar credenciales adicionales en `cypress/support/commands.js`
7. Habilitar la interfaz gráfica: cypress open
8. Agregar la carpeta Cypress como nuevo proyecto
9. Seleccionar la opción E2E Testing
10. Seleccionar el navegador Chrome
11. Hacer clic en los archivos *.feature para ejecutar cada escenario



    
    
    





