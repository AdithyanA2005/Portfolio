import createImageUrlBuilder from "@sanity/image-url"
import { dataset, projectId } from "../env"
import { SanityImage } from "@/utils/api/typings"

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: SanityImage) => {
  return imageBuilder?.image(source)
};
