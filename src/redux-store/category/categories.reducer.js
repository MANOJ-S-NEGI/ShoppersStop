
export const CATEGORIES_ACTION_TYPES = {
  FETCH_CATEGORIES_START: 'category/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS: 'category/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED: 'category/FETCH_CATEGORIES_FAILED',
};

export const CATEGORIES_INITIAL_STATE = {
  categories:[],
  isLoading:false,
  error:null,
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) =>{
  const {type, payload} = action;

  switch(type){
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state , isLoading:true };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: payload };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
}
