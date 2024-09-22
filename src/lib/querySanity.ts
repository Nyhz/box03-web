import { client } from './sanityClient';

export async function getStorages() {
  try{
    const query = '*[_type == "storage"] | order(name asc)';  
    const result = await client.fetch(query);

    if (result.length === 0) {
      throw new Error('No se han encontrado trasteros en Sanity');
    }
    return result
  } catch (error) {
    console.error('Error al obtener trasteros de Sanity:', error);
    throw error;
  }
}
