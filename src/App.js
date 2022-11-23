import React from "react";
import "dotenv/config";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider } from "react-redux";
import KeplerGl from "kepler.gl";
import useSWR from "swr";
import { addDataToMap } from "kepler.gl/actions";
import { useDispatch } from "react-redux";
import { handleActions } from "redux-actions";
import { routerReducer } from "react-router-redux";
import { processGeojson } from "kepler.gl/processors";
import { datasetWrapper } from "./hooks/useGeoJson";
import { togglePerspective } from "kepler.gl/actions";
import { mapLayerConfig } from "./utils/layerConfig";
require("dotenv").config();

const initialAppState = {
  appName: "example",
  loaded: false,
};

const reducers = combineReducers({
  keplerGl: keplerGlReducer,
  app: handleActions({}, initialAppState),
  routing: routerReducer,
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

function Map() {
  const dispatch = useDispatch();

  const buildingData = useSWR("buildings", async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/maptime-ams/geojson-3d/gh-pages/data/buildings.json"
    );
    let buildingData = await response.json();
    buildingData = processGeojson(buildingData);
    return buildingData;
  });

  React.useEffect(() => {
    dispatch(togglePerspective());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (buildingData.data) {
      dispatch(
        addDataToMap(
          datasetWrapper("Buildings", buildingData.data, mapLayerConfig)
        )
      );
    }
  }, [dispatch, buildingData.data]);

  return (
    <KeplerGl
      id="react-3d-map"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Map />
    </Provider>
  );
}
