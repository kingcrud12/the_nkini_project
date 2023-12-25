import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getInfo() {
  return client.fetch(
    groq`*[_type == "info"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      socialLinks,
      skills
    }`
  );
}

export async function getPost() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id, 
      name,
      "slug": slug.current,
      tagline,
      "logo": logo.asset->url,
    }`
  );
}

export async function getSinglePost(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      name,
      postUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }`,
    { slug }
  );
}