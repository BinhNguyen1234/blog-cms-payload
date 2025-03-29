import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      type: 'select',
      name: 'role',
      options: ['super-admin', 'admin', 'user'],
      required: true
    }
  ],
}
export type UserData = typeof Users.fields