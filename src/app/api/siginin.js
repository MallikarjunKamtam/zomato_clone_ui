import axios from "axios";
const baseEndPoint = process.env.NEXT_PUBLIC_ZOMATO_CLONE_SERVICE;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        `${baseEndPoint}/auth/signin`,
        req.body,
        {
          withCredentials: true,
        }
      );

      response.headers["set-cookie"]?.forEach((cookie) => {
        res.setHeader("Set-Cookie", cookie);
      });

      res.status(200).json({ message: "Sign in successful" });
    } catch (error) {
      res
        .status(error.response?.status || 500)
        .json({ message: "Sign in failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
