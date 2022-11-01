const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Intrnship tracker",
    description: "An open API for tracking INternships",
  },
  host: "",
  schemes: ["http", "https"],
};

const outputFile = "../dist/swagger-output.json";
const endpointsFiles = ["../dist/config/routes/internship.routes.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);