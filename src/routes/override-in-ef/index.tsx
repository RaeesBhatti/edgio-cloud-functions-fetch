import { component$ } from "@builder.io/qwik";
import { type RequestHandler, type DocumentHead } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({ headers }) => {
  headers.set("cache-control", "no-cache, no-store");
};

export default component$(() => {
  return (
    <>
      <h1>Override in EF</h1>
      <p>
        This page is rendered by the Edgio Cloud Functions.
      </p>
      <p>{new Date().toString()}</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
