import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { Express, Request, Response } from "express";

const options = {
  definition: {
    // 3.0.0 \ 3.1.0
    openapi: "3.0.1",
    info: {
      title: "KenzieFy API Docs",
      version: "0.0.1",
    },
  },
  apis: ["./src/docs/**/*.swagger.yaml"],
  // ./src/docs/band/band.swagger.yaml
};

export const initSwagger = (app: Express) => {
  const swaggerSpec = swaggerJSDoc(options);

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
};
