import { createClient } from "next-sanity";
import clientconfig from "../clientconfig";
import { groq } from "next-sanity";

const client = createClient(clientconfig);

export function getHome() {
  return client.fetch(groq`
      *[_type == "home"] {
        title
      }
    `);
}

export function getAbout() {
  return client.fetch(groq`
      *[_type == "about"] {
        title,
        image
      }
    `);
}
