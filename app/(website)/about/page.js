import { getAbout } from "@/sanity/queries";
import Link from "next/link";

export const dynamic = 10;

export default async function About() {
  const [{ title }] = await getAbout();

  return (
    <div className="content about">
      <div className="title">About</div>
      <Link href="/">Go to Home</Link>
      <div className="text">{title}</div>
    </div>
  );
}
