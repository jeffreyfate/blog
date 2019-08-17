export default {
  name: 'bio',
  type: 'document',
  title: 'Bio',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'summary',
      type: 'summaryPortableText',
      title: 'Summary'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      bio: 'bio'
    }
  }
}
