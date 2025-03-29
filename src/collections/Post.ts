import type { CollectionConfig } from "payload";

export const Post: CollectionConfig = {
  slug: "posts",
  fields: [{ name: "title", type: "text" }],
  dbName: "posts",
  timestamps: true,
  versions: {
    maxPerDoc: 0,
    drafts: true
  },
  access: {
    read: ( request ) => {
      console.log(request.req.user)
      if(request.req.user){
        
        return true
      }
      return false
    },

    readVersions: (request)=>{
      return Boolean(request.req.user)
    }
  }
};
