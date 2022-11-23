import { processGeojson } from "kepler.gl/processors";

export const datasetWrapper = (label, data, config) => {
  const _dataId = `${String(label).toLowerCase().trim()}_dataId`;
  return {
    datasets: {
      info: {
        label: label,
        id: _dataId,
      },
      data,
    },
    option: {
      centerMap: true,
      readOnly: false,
    },
    config,
  };
};

const useFetchGeoJson = async (label, url) => {
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
export default useFetchGeoJson;
