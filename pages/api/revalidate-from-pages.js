export default async function handler(req, res) {
  // Check for POST request
  // if (req.method !== "POST") {
  //   res.status(400).json({ error: "Invalid HTTP method. Only POST requests allowed" });
  // }

  // // Check secret token
  // const token = req.headers?.authorization;
  // if (token !== process.env.REVALIDATE_SECRET_TOKEN) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }

  // try {
  //   // Check that body is not empty
  //   if (!req?.body) {
  //     return res.status(400).json({ error: "Bad request. No body" });
  //   }

  //   // revalidate if there's slug param in request
  //   if (req.body.slug) {
  //     await res.revalidate(`/${req.body.slug}`);
  //     return res.json({ revalidated: true });
  //   }
  // } catch {
  //   return res.status(500).send("Error revalidating");
  // }

  const path = req.nextUrl.searchParams.get("path") || "/";
  console.log(path);
  await res.revalidate(path);
  return res.status(500).send("Error revalidating");
}
