import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID as string,
  dataset: import.meta.env.SANITY_DATASET as string,
  token: import.meta.env.SANITY_TOKEN as string | undefined,
  useCdn: true,
  apiVersion: '2023-01-01', 
});

