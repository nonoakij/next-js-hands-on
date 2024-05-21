import { Hono } from "hono";
import { cors } from "hono/cors";
import { z } from "zod";

const app = new Hono();

app
  .use(
    "/*",
    cors({
      origin: ["http://localhost:3000", "http://localhost:4000"],
      allowMethods: ["POST", "GET", "OPTIONS"],
    }),
  )
  .get("/", (c) => {
    return c.text("I am Next.js Hands-on backend server!");
  })
  .post("/auth", async (c) => {
    const body = z
      .object({
        email: z.string().email(),
        password: z.string(),
      })
      .parse(await c.req.json());
    return c.json({ message: "You are authenticated!", email: body.email });
  });

export default app;
