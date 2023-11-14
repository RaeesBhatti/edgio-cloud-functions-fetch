export async function handleHttpRequest(request: Request) {
  const requestBody = !['GET', 'HEAD'].includes(request.method) ? await request.arrayBuffer() : undefined;
  const cloudFunctionsResponse = await fetch(request.url, {
    // @ts-ignore
    edgio: { origin: "edgio_serverless" },
    method: request.method,
    headers: request.headers,
    body: requestBody,
  });

  // Do whatever with the response here or just return it as is.
  let responseText = await cloudFunctionsResponse.text();
  responseText = responseText.replace('Cloud Functions', 'Edge Functions');
  responseText = responseText.replace('rendered by', 'changed by');

  return new Response(responseText, {
    status: cloudFunctionsResponse.status,
    statusText: cloudFunctionsResponse.statusText,
    headers: cloudFunctionsResponse.headers,
  });
}
