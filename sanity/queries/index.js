import { createClient } from "next-sanity";
import clientconfig from "../clientconfig";
import { groq } from "next-sanity";

const client = createClient(clientconfig);

export function getContent() {
  return client.fetch(groq`
      *[_type == "test"] {
        title
      }
    `);
}
