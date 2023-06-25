import { client } from "@/sanity/lib/client";
import { qualificationsQuery } from "../queries";
import { Qualification } from "../typings";

export default async function fetchQualifications(): Promise<Qualification[]> {
  const qualifications: Qualification[] = await client.fetch<Qualification[]>(qualificationsQuery);
  return qualifications;
}
