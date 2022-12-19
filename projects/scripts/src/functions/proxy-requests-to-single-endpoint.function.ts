import { ClientRequest, IncomingMessage, request, RequestOptions, ServerResponse } from 'http';

interface ProxyServerParams {
  path: string;
  port: number;
  hostname: string;
  requestMessage: IncomingMessage;
  responseMessage: ServerResponse<IncomingMessage>;
}

export function forwardRequestsToSingleEndpoint(params: ProxyServerParams): void {
  const { path, port, hostname, requestMessage, responseMessage }: ProxyServerParams = params;
  const { method, headers }: IncomingMessage = requestMessage;
  const options: RequestOptions = {
    hostname,
    port,
    path,
    method,
    headers,
  };

  const proxyRequest: ClientRequest = request(options, (proxyResponse: IncomingMessage): void => {
    if (proxyResponse.statusCode === 404 || proxyResponse.statusCode === undefined) {
      forwardRequestsToSingleEndpoint({ ...params, path: '/' });
      return;
    }

    responseMessage.writeHead(proxyResponse.statusCode, proxyResponse.headers);
    proxyResponse.pipe(responseMessage, { end: true });
  });

  requestMessage.pipe(proxyRequest, { end: true });
}
