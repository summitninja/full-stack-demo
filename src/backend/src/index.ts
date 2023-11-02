import { Elysia } from "elysia";

const app = new Elysia()
  .group("/api", (app) => {
    return app.get("/", () => "Hello Elysia");
  })
  .listen({ hostname: "0.0.0.0", port: 80 });

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
