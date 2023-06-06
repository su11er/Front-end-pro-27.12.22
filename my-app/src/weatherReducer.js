const SET_WEATHER = 'SET_WEATHER';

const initialState = {
  temperature: null,
  pressure: null,
  description: '',
  humidity: null,
  windSpeed: null,
  windDegree: null,
  icon: ''
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default weatherReducer;