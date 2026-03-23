import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const postgresUrl = process.env.POSTGRES_URL;

const dbUnavailableProxy = new Proxy(
  {},
  {
    get() {
      throw new Error("POSTGRES_URL environment variable is not set");
    },
  }
);

const client = postgresUrl
  ? postgres(postgresUrl, {
      max: 1,
    })
  : null;

export const db = client ? drizzle(client, { schema }) : dbUnavailableProxy;
