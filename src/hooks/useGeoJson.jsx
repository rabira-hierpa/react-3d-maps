import { processGeojson } from "kepler.gl/processors";

export const datasetWrapper = (label, data) => ({
  datasets: {
    info: {
      label: label,
      id: String(label).trim(),
    },
    data,
  },
  option: {
    centerMap: true,
    readOnly: false,
  },
  config: {},
});

const fetchGeoJson = async (label, url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const data = processGeojson(json);
    return [data, datasetWrapper(label, data)];
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
export default fetchGeoJson;
