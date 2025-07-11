import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Just log the whole body for now without destructuring
    console.log("Received form data:", req.body);
    return res.status(200).json({ message: "Form received" });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
