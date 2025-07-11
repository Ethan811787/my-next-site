import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // You can add logic here, e.g., save data, send email, etc.
    console.log("Received contact form:", req.body);

    return res.status(200).json({ message: "Message received!" });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}