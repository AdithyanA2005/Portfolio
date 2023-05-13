import { client } from "@/sanity/lib/client";
import { socialsQuery } from "../queries";
import { Social } from "../typings";

export default async function fetchSocials(): Promise<Social[]> {
  const socials: Social[] = await client.fetch<Social[]>(socialsQuery);
  return socials;
};
