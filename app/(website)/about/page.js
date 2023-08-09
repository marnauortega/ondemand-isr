import { getAbout } from "@/sanity/queries";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import clientconfig from "@/sanity/clientconfig";

export const revalidate = 10;

const builder = imageUrlBuilder(clientconfig);

function urlFor(source) {
  return builder.image(source);
}

export default async function About() {
  const [{ title, image }] = await getAbout();

  return (
    <div className="content about">
      <div className="title">About</div>
      <Link href="/">Go to Home</Link>
      <div className="text">{title}</div>
      <Image src={urlFor(image.asset._ref).url()} width={300} height={200} alt="" />
    </div>
  );
}
