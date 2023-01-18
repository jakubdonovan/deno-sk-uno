import { createServer } from "npm:vite";
import { fromFileUrl } from "https://deno.land/std@0.171.0/path/mod.ts";

const server = await createServer({
  root: fromFileUrl(import.meta.resolve("./")),
  server: { port: 1337 },
});

await server.listen();

server.printUrls();