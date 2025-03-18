import type { CollectionConfig } from "payload";

export const Post: CollectionConfig = {
  slug: "post",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [{ name: "title", type: "text" }],
};
