//api/giornate.js: Contiene la logica per connettersi a MongoDB e recuperare i dati.

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await client.connect();
      const database = client.db(process.env.DB_NAME);
      const collection = database.collection("giornate");
      const giornate = await collection.find({}).toArray();
      res.status(200).json(giornate);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data" });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
