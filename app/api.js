import axios from 'axios';


const URL_PREFIX = 'https://demos.telerik.com/aspnet-mvc/tripxpert/';
const TOP_RECOMMENDS_URL = 'Destinations/Destinations_First';
const DESTINATIONS = 'Destinations/Destinations_Read';


export async function getRecommended() {
  const response = await axios.get(`/api/${TOP_RECOMMENDS_URL}`);
  // ofc not error handling here
  return response.data.map((data) => ({
    ...data,
    DefaultImage: `${URL_PREFIX}${data.DefaultImage}`,
  }));
}

export async function getDestinations() {
  const response = await axios.get(`/api/${DESTINATIONS}`);

  // ofc not error handling here
  return {
    ...response.data,
    Data: response.data.Data.map((data) => ({
      ...data,
      DefaultImage: `${URL_PREFIX}${data.DefaultImage}`,
    })),
  };
}
