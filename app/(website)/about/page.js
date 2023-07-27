import { getAbout } from "@/sanity/queries";
import Link from "next/link";

export default async function Home() {
  const [{ title }] = await getAbout();

  return (
    <div className="content about">
      <div className="title">About</div>
      <Link href="/">Go to Home</Link>
      <div className="text">{title}</div>
    </div>
  );
}
