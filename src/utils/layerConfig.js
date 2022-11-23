export const mapLayerConfig = {
  version: "v1",
  config: {
    visState: {
      filters: [],
      layers: [
        {
          id: "83az5as",
          type: "geojson",
          config: {
            dataId: "buildings_dataId",
            label: "Buildings",
            color: [255, 153, 31],
            highlightColor: [252, 242, 26, 255],
            columns: {
              geojson: "_geojson",
            },
            isVisible: true,
            visConfig: {
              opacity: 0.8,
              strokeOpacity: 0.8,
              thickness: 0.5,
              strokeColor: [241, 92, 23],
              colorRange: {
                name: "Global Warming",
                type: "sequential",
                category: "Uber",
                colors: [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300",
                ],
              },
              strokeColorRange: {
                name: "Global Warming",
                type: "sequential",
                category: "Uber",
                colors: [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300",
                ],
              },
              radius: 10,
              sizeRange: [0, 10],
              radiusRange: [0, 50],
              heightRange: [0, 500],
              elevationScale: 0.1,
              enableElevationZoomFactor: true,
              stroked: true,
              filled: true,
              enable3d: true,
              wireframe: false,
            },
            hidden: false,
            textLabel: [
              {
                field: null,
                color: [255, 255, 255],
                size: 18,
                offset: [0, 0],
                anchor: "start",
                alignment: "center",
              },
            ],
          },
          visualChannels: {
            colorField: null,
            colorScale: "quantile",
            strokeColorField: null,
            strokeColorScale: "quantile",
            sizeField: null,
            sizeScale: "linear",
            heightField: {
              name: "Height",
              type: "real",
            },
            heightScale: "linear",
            radiusField: null,
            radiusScale: "linear",
          },
        },
      ],
      interactionConfig: {
        tooltip: {
          fieldsToShow: {
            buildings_dataId: [
              {
                name: "Building_ID",
                format: null,
              },
              {
                name: "Height",
                format: null,
              },
            ],
            "work area_dataId": [
              {
                name: "AreaID",
                format: null,
              },
            ],
          },
          compareMode: false,
          compareType: "absolute",
          enabled: true,
        },
        brush: {
          size: 0.5,
          enabled: false,
        },
        geocoder: {
          enabled: false,
        },
        coordinate: {
          enabled: false,
        },
      },
      layerBlending: "normal",
      splitMaps: [],
      animationConfig: {
        currentTime: null,
        speed: 1,
      },
    },
    mapState: {
      bearing: 157.8120567375886,
      dragRotate: true,
      latitude: -33.91015492244223,
      longitude: 150.93777061111348,
      pitch: 54.74532403936364,
      zoom: 15.800937609294941,
      isSplit: false,
    },
    mapStyle: {
      styleType: "dark",
      topLayerGroups: {},
      visibleLayerGroups: {
        label: true,
        road: true,
        border: false,
        building: true,
        water: true,
        land: true,
        "3d building": false,
      },
      threeDBuildingColor: [
        9.665468314072013, 17.18305478057247, 31.1442867897876,
      ],
      mapStyles: {},
    },
  },
};

export const workAreaLayerConfig = {
  version: "v1",
  config: {
    visState: {
      filters: [],
      layers: [
        {
          id: "7rgjgp",
          type: "geojson",
          config: {
            dataId: "work area_dataId",
            label: "Work Area",
            color: [34, 63, 154],
            highlightColor: [252, 242, 26, 255],
            columns: {
              geojson: "_geojson",
            },
            isVisible: true,
            visConfig: {
              opacity: 0.8,
              strokeOpacity: 0.8,
              thickness: 0.1,
              strokeColor: [218, 112, 191],
              colorRange: {
                name: "Global Warming",
                type: "sequential",
                category: "Uber",
                colors: [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300",
                ],
              },
              strokeColorRange: {
                name: "Global Warming",
                type: "sequential",
                category: "Uber",
                colors: [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300",
                ],
              },
              radius: 10,
              sizeRange: [0, 10],
              radiusRange: [0, 50],
              heightRange: [0, 500],
              elevationScale: 5,
              enableElevationZoomFactor: true,
              stroked: true,
              filled: true,
              enable3d: false,
              wireframe: false,
            },
            hidden: false,
            textLabel: [
              {
                field: null,
                color: [255, 255, 255],
                size: 18,
                offset: [0, 0],
                anchor: "start",
                alignment: "center",
              },
            ],
          },
          visualChannels: {
            colorField: null,
            colorScale: "quantile",
            strokeColorField: null,
            strokeColorScale: "quantile",
            sizeField: null,
            sizeScale: "linear",
            heightField: null,
            heightScale: "linear",
            radiusField: null,
            radiusScale: "linear",
          },
        },
      ],
      interactionConfig: {
        tooltip: {
          fieldsToShow: {
            buildings_dataId: [
              {
                name: "Building_ID",
                format: null,
              },
              {
                name: "Height",
                format: null,
              },
            ],
            "work area_dataId": [
              {
                name: "AreaID",
                format: null,
              },
            ],
          },
          compareMode: false,
          compareType: "absolute",
          enabled: true,
        },
        brush: {
          size: 0.5,
          enabled: false,
        },
        geocoder: {
          enabled: false,
        },
        coordinate: {
          enabled: false,
        },
      },
      layerBlending: "normal",
      splitMaps: [],
      animationConfig: {
        currentTime: null,
        speed: 1,
      },
    },
    mapState: {
      bearing: 157.8120567375886,
      dragRotate: true,
      latitude: -33.91015492244223,
      longitude: 150.93777061111348,
      pitch: 54.74532403936364,
      zoom: 15.800937609294941,
      isSplit: false,
    },
    mapStyle: {
      styleType: "dark",
      topLayerGroups: {},
      visibleLayerGroups: {
        label: true,
        road: true,
        border: false,
        building: true,
        water: true,
        land: true,
        "3d building": false,
      },
      threeDBuildingColor: [
        9.665468314072013, 17.18305478057247, 31.1442867897876,
      ],
      mapStyles: {},
    },
  },
};
