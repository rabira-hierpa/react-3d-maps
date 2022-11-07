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
import { processCsvData, processGeojson } from "kepler.gl/processors";
import { datasetWrapper } from "./hooks/useGeoJson";
import { togglePerspective } from "kepler.gl/actions";
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
      "https://raw.githubusercontent.com/rabira-hierpa/react-3d-maps/main/data/Building_noZ.geojson"
    );
    let buildingData = await response.json();
    buildingData = processGeojson(buildingData);
    return buildingData;
  });

  const workAreaData = useSWR("workAreas", async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/rabira-hierpa/react-3d-maps/main/data/WorkAreas_WGS84.geojson"
    );
    let workAreaData = await response.json();
    workAreaData = processGeojson(workAreaData);
    return workAreaData;
  });

  const facedPoints = useSWR("workAreas", async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/rabira-hierpa/react-3d-maps/main/data/facadePoints_WGS84.csv"
    );
    let facedPoints = await response.json();
    facedPoints = processCsvData(facedPoints);
    return facedPoints;
  });

  React.useEffect(() => {
    dispatch(togglePerspective());
  }, []);

  React.useEffect(() => {
    if (buildingData.data) {
      dispatch(addDataToMap(datasetWrapper("Buildings", buildingData.data)));
    }
    if (workAreaData.data) {
      dispatch(addDataToMap(datasetWrapper("Work Area", workAreaData.data)));
    }
    if (facedPoints.data) {
      dispatch(addDataToMap(datasetWrapper("Faced Points", facedPoints.data)));
    }
  }, [dispatch, buildingData.data, workAreaData.data, facedPoints.data]);

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
