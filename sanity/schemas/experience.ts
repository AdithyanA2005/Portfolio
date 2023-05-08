import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    }),
    defineField({
      name: "companyImage",
      title: "Company image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "dateStarted",
      title: "Date Started",
      type: "date",
    }),
    defineField({
      name: "dateEnded",
      title: "Date Ended",
      type: "date",
    }),
    defineField({
      name: "currentlyWorkingHere",
      title: "Currently Working Here",
      type: "boolean",
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
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
