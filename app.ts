import { Application } from "https://deno.land/x/oak/mod.ts";
import { router } from "./router/router.ts";
import { client } from "./configs/database.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
await client.connect();

await app.listen({ port: 8000 });

await client.end();
