import info from "./schemas/info";
import skill from "./schemas/skill";
import social from "./schemas/social";
import project from "./schemas/project";
import experience from "./schemas/experience";
import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [info, skill, social, project, experience],
};
