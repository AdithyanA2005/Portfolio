import type { NextApiRequest, NextApiResponse } from "next";
import { PageInfo } from "next/dist/build/utils";
import { client } from "@/sanity/lib/client";
import { pageInfoQuery } from "@/utils/api/queries";

export default async function getPageInfoHandler(
  req: NextApiRequest,
  res: NextApiResponse<PageInfo>
) {
  const pageInfo: PageInfo = await client.fetch(pageInfoQuery);
  res.status(200).json(pageInfo);
};
