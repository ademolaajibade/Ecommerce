// import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

// export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

import { createClient } from "redis";

const client = createClient({
  url: "rediss://default:AT6fAAIncDJkMmY4NzdlMjYwMjU0Yjk1OWQ0MDYyMzhlMTY3Mjc2ZHAyMTYwMzE@suitable-marmot-16031.upstash.io:6379",
  token: "AT6fAAIncDJkMmY4NzdlMjYwMjU0Yjk1OWQ0MDYyMzhlMTY3Mjc2ZHAyMTYwMzE",
});

client.on("error", function (err) {
  throw err;
});
await client.connect();
await client.set("foo", "bar");

// Disconnect after usage
// await client.disconnect();

export default client;
