// action
const HEADER = 'PlaceDialogReducer';
const TYPE = {
  SET_OPEN_PLACE_DIALOG: `${HEADER}/SET_OPEN_PLACE_DIALOG` as const,
  SET_PLACE_NAME: `${HEADER}/SET_PLACE_NAME` as const,
  SET_ADDRESS: `${HEADER}/SET_ADDRESS` as const,
  SET_RATING: `${HEADER}/SET_RATING` as const,
  SET_VISIT_COUNT: `${HEADER}/SET_VISIT_COUNT` as const,
  SET_DISTANCE: `${HEADER}/SET_DISTANCE` as const,
  SET_WEATHER_ICON: `${HEADER}/SET_WEATHER_ICON` as const,
  SET_WEATHER: `${HEADER}/SET_WEATHER` as const,
  SET_PLACE_ID: `${HEADER}/SET_PLACE_ID` as const,
  SET_REVIEW_CONTENT: `${HEADER}/SET_REVIEW_CONTENT` as const,
  SET_SKY: `${HEADER}/SET_SKY` as const,
  SET_DEGREE: `${HEADER}/SET_DEGREE` as const,
  SET_RAINY_PROB: `${HEADER}/SET_RAINY_PROB` as const,
  SET_RAINY_TYPE: `${HEADER}/SET_RAINY_TYPE` as const,
  SET_WIND_SPEED: `${HEADER}/SET_WIND_SPEED` as const,
  SET_PICTURE_ID: `${HEADER}/SET_PICTURE_ID` as const,
  SET_IS_VISIT: `${HEADER}/SET_IS_VISIT` as const,
  SET_LOADING: `${HEADER}/SET_LOADING` as const,
};

export const PlaceDialogAction = {
  setOpenPlaceDialog: (open: boolean) => ({type: TYPE.SET_OPEN_PLACE_DIALOG, payload: open}),
  setPlaceName: (placeName: string) => ({type: TYPE.SET_PLACE_NAME, payload: placeName}),
  setAddress: (address: string) => ({type: TYPE.SET_ADDRESS, payload: address}),
  setRating: (rating: number) => ({type: TYPE.SET_RATING, payload: rating}),
  setVisitCount: (visitCount: number) => ({type: TYPE.SET_VISIT_COUNT, payload: visitCount}),
  setDistance: (distance: string) => ({type: TYPE.SET_DISTANCE, payload: distance}),
  setWeatherIcon: (weatherIcon: number) => ({type: TYPE.SET_WEATHER_ICON, payload: weatherIcon}),
  setWeather: (weather: string) => ({type: TYPE.SET_WEATHER, payload: weather}),
  setPlaceId: (id: number) => ({type: TYPE.SET_PLACE_ID, payload: id}),
  setReviewContent: (content: string) => ({type: TYPE.SET_REVIEW_CONTENT, payload: content}),
  setSky: (sky: string) => ({type: TYPE.SET_SKY, payload: sky}),
  setDegree: (degree: string) => ({type: TYPE.SET_DEGREE, payload: degree}),
  setRainyProb: (rainyProb: string) => ({type: TYPE.SET_RAINY_PROB, payload: rainyProb}),
  setRainyType: (rainyType: string) => ({type: TYPE.SET_RAINY_TYPE, payload: rainyType}),
  setWindSpeed: (windSpeed: string) => ({type: TYPE.SET_WIND_SPEED, payload: windSpeed}),
  setPictureId: (pictureId: number) => ({type: TYPE.SET_PICTURE_ID, payload: pictureId}),
  setIsVisit: (isVisit: boolean) => ({type: TYPE.SET_IS_VISIT, payload: isVisit}),
  setLoading: (isLoading: boolean) => ({type: TYPE.SET_LOADING, payload: isLoading}),
};

type PlaceDialogActionType =
  ReturnType<typeof PlaceDialogAction.setOpenPlaceDialog> |
  ReturnType<typeof PlaceDialogAction.setPlaceName> |
  ReturnType<typeof PlaceDialogAction.setAddress> |
  ReturnType<typeof PlaceDialogAction.setRating> |
  ReturnType<typeof PlaceDialogAction.setVisitCount> |
  ReturnType<typeof PlaceDialogAction.setDistance> |
  ReturnType<typeof PlaceDialogAction.setWeatherIcon> |
  ReturnType<typeof PlaceDialogAction.setWeather> |
  ReturnType<typeof PlaceDialogAction.setPlaceId> |
  ReturnType<typeof PlaceDialogAction.setReviewContent> |
  ReturnType<typeof PlaceDialogAction.setSky> |
  ReturnType<typeof PlaceDialogAction.setDegree> |
  ReturnType<typeof PlaceDialogAction.setRainyProb> |
  ReturnType<typeof PlaceDialogAction.setRainyType> |
  ReturnType<typeof PlaceDialogAction.setWindSpeed> |
  ReturnType<typeof PlaceDialogAction.setPictureId> |
  ReturnType<typeof PlaceDialogAction.setIsVisit> |
  ReturnType<typeof PlaceDialogAction.setLoading>;


// state
type PlaceDialogState = {
  openPlaceDialog: boolean,
  placeName: string,
  address: string,
  rating: number,
  visitCount: number,
  distance: string,
  weatherIcon: number,
  weather: string,
  placeId: number,
  reviewContent: string,
  sky: string,
  degree: string,
  rainyProb: string,
  rainyType: string,
  windSpeed: string,
  pictureId: number,
  isVisit: boolean,
  isLoading: boolean,
}

const INIT_PLACE_DIALOG_STATE: PlaceDialogState = {
  openPlaceDialog: false,
  placeName: '',
  address: '',
  rating: 0,
  visitCount: 0,
  distance: '',
  weatherIcon: 0,
  weather: '',
  placeId: 0,
  reviewContent: '',
  sky: '',
  degree: '',
  rainyProb: '',
  rainyType: '',
  windSpeed: '',
  pictureId: 0,
  isVisit: false,
  isLoading: true,
};


// reducer
export default function PlaceDialogReducer(state: PlaceDialogState = INIT_PLACE_DIALOG_STATE, action: PlaceDialogActionType): PlaceDialogState {
  switch (action.type) {
    case TYPE.SET_OPEN_PLACE_DIALOG:
      return {...state, openPlaceDialog: action.payload};
    case TYPE.SET_PLACE_NAME:
      return {...state, placeName: action.payload};
    case TYPE.SET_ADDRESS:
      return {...state, address: action.payload};
    case TYPE.SET_RATING:
      return {...state, rating: action.payload};
    case TYPE.SET_VISIT_COUNT:
      return {...state, visitCount: action.payload};
    case TYPE.SET_DISTANCE:
      return {...state, distance: action.payload};
    case TYPE.SET_WEATHER_ICON:
      return {...state, weatherIcon: action.payload};
    case TYPE.SET_WEATHER:
      return {...state, weather: action.payload};
    case TYPE.SET_PLACE_ID:
      return {...state, placeId: action.payload};
    case TYPE.SET_REVIEW_CONTENT:
      return {...state, reviewContent: action.payload};
    case TYPE.SET_SKY:
      return {...state, sky: action.payload};
    case TYPE.SET_DEGREE:
      return {...state, degree: action.payload};
    case TYPE.SET_RAINY_PROB:
      return {...state, rainyProb: action.payload};
    case TYPE.SET_RAINY_TYPE:
      return {...state, rainyType: action.payload};
    case TYPE.SET_WIND_SPEED:
      return {...state, windSpeed: action.payload};
    case TYPE.SET_PICTURE_ID:
      return {...state, pictureId: action.payload};
    case TYPE.SET_IS_VISIT:
      return {...state, isVisit: action.payload};
    case TYPE.SET_LOADING:
      return {...state, isLoading: action.payload};
    default:
      return state;
  }
}