import { getHome } from "@/sanity/queries";
import Link from "next/link";

export default async function Home() {
  // const [{ title }] = await getHome();

  return (
    <div className="content">
      <div className="title">Home</div>
      <Link href="/about">Go to About</Link>
      {/* <div className="text">{title}</div> */}
    </div>
  );
}
