import { getAbout } from "@/sanity/queries";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import clientconfig from "@/sanity/clientconfig";

export const revalidate = 60;

// const builder = imageUrlBuilder(clientconfig);

// function urlFor(source) {
//   return builder.image(source);
// }

export default async function About() {
  const [{ title }] = await getAbout();

  return (
    <div className="content about">
      <div className="title">About</div>
      <Link href="/">Go to Home</Link>
      <div className="text">{title}</div>
      <div className="text">{Math.random()}</div>
      <Image src="/poster.jpeg" width="1200" height="1074" alt="some image" />
    </div>
  );
}
