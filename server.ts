import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from "@angular/ssr/node";
import express from "express";
import { join } from "node:path";

const browserDistributionFolder: string = join(
  import.meta.dirname,
  "../browser"
);

const server: express.Express = express();
const angularApplicationEngine: AngularNodeAppEngine =
  new AngularNodeAppEngine();

server.use(
  express.static(browserDistributionFolder, {
    maxAge: "1y",
    index: false,
    redirect: false,
  })
);

server.use(
  (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    angularApplicationEngine
      .handle(request)
      .then((angularResponse: Response | null) =>
        angularResponse
          ? writeResponseToNodeResponse(angularResponse, response)
          : next()
      )
      .catch(next);
  }
);

if (isMainModule(import.meta.url)) {
  const port: string | number = process.env["PORT"] || 4000;

  server
    .listen(port)
    .once("error", (error: Error) => {
      throw error;
    })
    .on("listening", () => {
      console.log(`Node Express server listening on http://localhost:${port}`);
    });
}

export const reqHandler = createNodeRequestHandler(server);
