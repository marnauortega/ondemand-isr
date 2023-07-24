import { getContent } from "@/sanity/queries";

export default async function Home() {
  const [{ title }] = await getContent();

  return <main>{title}</main>;
}
