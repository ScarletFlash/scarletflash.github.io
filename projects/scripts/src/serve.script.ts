import { cp, mkdir } from 'fs/promises';
import { createServer, IncomingMessage, Server, ServerResponse } from 'http';
import { join } from 'path';
import { serve, ServeResult } from 'esbuild';
import { Config } from './constants/config.const';
import { Path } from './constants/path.const';
import { buildIndexCss } from './functions/build-index-css.function';
import { buildIndexHtml } from './functions/build-index-html.function';
import { forwardRequestsToSingleEndpoint } from './functions/proxy-requests-to-single-endpoint.function';

const temporaryServeDirectoryPath: string = join(Path.Dist.directory, `.serve-dir-${new Date().valueOf()}`);

async function runServer(): Promise<void> {
  const { port, host }: ServeResult = await serve(
    { ...Config.serveOptions, servedir: temporaryServeDirectoryPath },
    { ...Config.buildOptions, outdir: temporaryServeDirectoryPath, minify: false }
  );

  const proxyServerForSpaNavigation: Server = createServer(
    (request: IncomingMessage, response: ServerResponse<IncomingMessage>) => {
      forwardRequestsToSingleEndpoint({
        path: request.url ?? '/',
        hostname: host,
        port,
        requestMessage: request,
        responseMessage: response,
      });
    }
  );

  const proxyServerPort: number = 4200;
  proxyServerForSpaNavigation.listen(proxyServerPort);
  // eslint-disable-next-line no-console
  console.log(`🚀 http://${host}:${proxyServerPort}/`);
}

Promise.resolve()
  .then(() => mkdir(temporaryServeDirectoryPath, { recursive: true }))
  .then(() => buildIndexHtml(temporaryServeDirectoryPath))
  .then(() => buildIndexCss(temporaryServeDirectoryPath))
  .then(() =>
    cp(Path.Application.Source.assetsDirectory, join(temporaryServeDirectoryPath, 'assets'), {
      recursive: true,
    })
  )
  .then(() => runServer());
