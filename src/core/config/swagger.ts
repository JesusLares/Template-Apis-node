import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";
import env from "./env";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de la API",
    version: "1.0.0",
    description: "Documentacion del template de la api",
  },
  servers: [
    {
      url: env.serverUrl,
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      // Add Schemas
    },
  },
  paths: {
    // add Routes
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
