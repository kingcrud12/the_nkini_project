import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const post = {
  name: "post",
  title: "Post",
  description: "Post Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the post",
    },
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule) => rule.max(60).required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "logo",
      title: "Post Logo",
      type: "image",
    },
    {
      name: "postUrl",
      title: "POST URL",
      type: "url",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this post",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this post",
      of: [{ type: "block" }],
    },
  ],
};

export default post;