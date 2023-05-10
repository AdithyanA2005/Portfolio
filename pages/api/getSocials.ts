import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";
import { Social } from "@/utils/api/typings";
import { socialsQuery } from "@/utils/api/queries";

type Data = {
  socials: Social[];
};

export default async function getSocialsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await client.fetch(socialsQuery);
  res.status(200).json({ socials });
};
