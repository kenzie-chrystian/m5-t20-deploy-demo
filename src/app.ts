import "reflect-metadata";
import express from "express";
import "express-async-errors";
import cors from "cors";

import { handleErrors } from "./middlewares";
import { initRoutes } from "./routers";
import { initJwtEnvVars } from "./configs";
import { initSwagger } from "./configs/swagger";

const app = express();

// inicializar os processos necessarios para roda a aplicação
export const initApp = () => {
  app.use(cors());
  app.use(express.json());
  initRoutes(app);
  initJwtEnvVars();
  initSwagger(app);
  // SEMPRE DEPOIS DA INICIALIZAÇÃO DAS ROTAS
  app.use(handleErrors);
};

export default app;
