//api/hello.js: Contiene una semplice risposta per testare l'API.

// api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Vercel API" });
}