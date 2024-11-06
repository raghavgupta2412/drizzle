import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/drizzle/schema.ts", ///schema path
  out: "./src/drizzle/migrations", //where are  migration files are
  driver: "pglite",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  verbose: true, // the things which are changing
  strict: true, //security measures
});
