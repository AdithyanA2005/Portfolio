import { defineField, defineType } from "sanity";

export default defineType({
  name: "qualification",
  title: "Qualification",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Image of the certificate",
      options: {
        hotspot: true,
      },
    }),
  ],
});
