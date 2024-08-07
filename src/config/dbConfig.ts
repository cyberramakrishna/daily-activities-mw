import { createConnection } from "typeorm";
import { Activity } from "../entities/Activity";

const dbConfig = async () => {
  await createConnection({
    type: "oracle",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 1521,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    sid: process.env.DB_SID,
    entities: [Activity],
    synchronize: true,
    logging: true,
  });
};

export default dbConfig;
