import { Hono } from "hono";
import { cors } from "hono/cors";
import { z } from "zod";
import { type MailListData, mailListData } from "./mock-data";

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
  })
  .get("/inbox", async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const searchQuery = c.req.query("search");
    console.log("searchQuery:", searchQuery);
    let searchResult: MailListData = [];
    if (searchQuery) {
      searchResult = mailListData.filter((mail) =>
        mail.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    } else {
      searchResult = mailListData;
    }

    return c.json(searchResult);
  })
  .get("/inbox/:id", async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const mail = mailListData.find((mail) => mail.id === c.req.param("id"));
    if (!mail) {
      return c.json({ message: "Mail not found" }, 404);
    }
    return c.json(mail);
  });

export default app;
