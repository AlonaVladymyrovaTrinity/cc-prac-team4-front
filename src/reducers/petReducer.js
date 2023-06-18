export const initialState = {
  loading: false,
};

export const petReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_PET_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'LOAD_PET_SUCCESS':
      return {
        ...state,
        loading: false,
        pet: action.payload,
      };
    case 'LOAD_PET_FAILURE':
      return {
        ...state,
        loading: false,
        pet: null,
        error: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const petsReducer = (state = { pets: [] }, action) => {
  switch (action.type) {
    case 'ALL_PET_REQUEST':
      return {
        ...state,
        loading: true,
        pets: [],
      };
    case 'ALL_PET_SUCCESS':
      return {
        ...state,
        loading: false,
        pets: action.payload.pets,
      };
    case 'ALL_PET_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const catBreedsReducer = (state = { catBreeds: [] }, action) => {
  switch (action.type) {
    case 'CAT_BREEDS_REQUEST':
      return {
        ...state,
        loading: true,
        catBreeds: [],
      };
    case 'CAT_BREEDS_SUCCESS':
      return {
        ...state,
        loading: false,
        catBreeds: action.payload.cats,
      };
    case 'CAT_BREEDS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const dogBreedsReducer = (state = { dogBreeds: [] }, action) => {
  switch (action.type) {
    case 'DOG_BREEDS_REQUEST':
      return {
        ...state,
        loading: true,
        dogBreeds: [],
      };
    case 'DOG_BREEDS_SUCCESS':
      return {
        ...state,
        loading: false,
        dogBreeds: action.payload.dogs,
      };
    case 'DOG_BREEDS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const catColorsReducer = (state = { catColors: [] }, action) => {
  switch (action.type) {
    case 'CAT_COLORS_REQUEST':
      return {
        ...state,
        loading: true,
        catColors: [],
      };
    case 'CAT_COLORS_SUCCESS':
      return {
        ...state,
        loading: false,
        catColors: action.payload.cats,
      };
    case 'CAT_COLORS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const dogColorsReducer = (state = { dogColors: [] }, action) => {
  switch (action.type) {
    case 'DOG_COLORS_REQUEST':
      return {
        ...state,
        loading: true,
        dogColors: [],
      };
    case 'DOG_COLORS_SUCCESS':
      return {
        ...state,
        loading: false,
        dogColors: action.payload.dogs,
      };
    case 'DOG_COLORS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
