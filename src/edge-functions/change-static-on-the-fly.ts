export async function handleHttpRequest(request: Request) {
  const requestBody = !["GET", "HEAD"].includes(request.method) ? await request.arrayBuffer() : undefined;
  const originResponse = await fetch(request.url, {
    // @ts-ignore
    edgio: { origin: "edgio_static" },
    method: request.method,
    headers: request.headers,
    body: requestBody,
    redirect: "manual",
  });

  // Do whatever with the response here or just return it as is.
  const responseText = (await originResponse.text()).replace("example", "edge functions");

  const responseHeaders = new Headers(originResponse.headers);
  responseHeaders.set("original-url", request.url);
  return new Response(responseText, {
    status: originResponse.status,
    statusText: originResponse.statusText,
    headers: responseHeaders,
  });
}
