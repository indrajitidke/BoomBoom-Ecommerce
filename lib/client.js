import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'a5v34fgr',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.SANITY_NEXT_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);