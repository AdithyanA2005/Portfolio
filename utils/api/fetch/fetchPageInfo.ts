import { client } from "@/sanity/lib/client";
import { pageInfoQuery } from "../queries";
import { PageInfo } from "../typings";

export default async function fetchPageInfo(): Promise<PageInfo> {
  const pageInfo: PageInfo = await client.fetch<PageInfo>(pageInfoQuery);
  return pageInfo;
};
