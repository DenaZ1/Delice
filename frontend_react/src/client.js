import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "xvrfu9ht",
    dataset: 'delice',
    apiVersion: '2023-05-03',
    useCdn: true,
    token: "skeDxcRN55G7Zzuj15G780RgmWXQ4qvfm2flFDF5c1VKfhKKo2taXF67h6fpdDvktI1CFtAFneGmDnxKZCTEknLKomCb2zynlPX0bFdQan9I3FvcFRx708751gZziBunIdmUaLQ6FSuZGmTLx3S6W2MkTvdEk5avuGXJH2UZzDTV88FY7Ker"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);