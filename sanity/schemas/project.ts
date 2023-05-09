import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
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
      description: "Cover image of your project (ratio:16:9)",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description: "Describe your projects in few words",
      type: "text",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      description: "Skill/technologies used in this project",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: "githubLink",
      title: "Github Link",
      description: "Link to github repository",
      type: "url",
    }),
    defineField({
      name: "liveLink",
      title: "Live Link",
      description: "Link to live hosted project",
      type: "url",
    }),
  ],
});
