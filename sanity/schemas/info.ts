import { defineField, defineType } from "sanity";

export default defineType({
  name: "info",
  title: "Info",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      description: "Your job designation",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "about",
      title: "About",
      description: "Write about you",
      type: "string",
    }),
    defineField({
      name: "specialBtnText",
      title: "Special Text",
      description: "Text for navbar special button",
      type: "string",
    }),
    defineField({
      name: "specialBtnUrl",
      title: "Special Url",
      description: "Url for navbar special button",
      type: "url",
    }),
    defineField({
      name: "specialBtnInNewTab",
      title: "Special new tab",
      description: "Open Special Url in new tab",
      type: "boolean",
    }),
    defineField({
      name: "heroTyper",
      title: "Hero Typer",
      description: "Texts to be shown with typewriter animation",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "aboutImage",
      title: "About image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
