const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:2368/ghost',
    env: {
      USERNAME: 'ma.rodriguezs123456@uniandes.edu.co',
      PASSWORD: 'Alejandro.123',
    },
    screenshotsFolder: "cypress/screenshots",
    trashAssetsBeforeRuns: true,
    video: false
  },
})
