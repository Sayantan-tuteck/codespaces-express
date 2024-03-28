const swaggerAutogen = require('swagger-autogen')()
const outputFile = './swagger_output.json'
const endpointsFiles = ['./dummyRouter.js']
swaggerAutogen(outputFile, endpointsFiles)