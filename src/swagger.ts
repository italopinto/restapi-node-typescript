import swaggerAutogen from "swagger-autogen";

const options = {
  openapi: "3.0.0"
};

const swaggerDocument = {
  info: {
    version: "1.0.0",
    title: "Rest API",
    description: "Test basic Rest API.",
    contact: {
      name: "API Support",
      email: "fulano496@gmail.com"
    }
  },
  host: "localhost:5000",
  basePath: "/user",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "User",
      description: "Users endpoints"
    }
  ],
  securityDefinitions: {},
  definitions: {}
};

const outputFile = "./swagger-output.json";
const routes = ["./src/routes/User.router.ts"];

swaggerAutogen(options)(outputFile, routes, swaggerDocument);
