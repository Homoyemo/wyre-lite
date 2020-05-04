import actions from './actions';

const {
  FB_ADD_BEGIN,
  FB_ADD_SUCCESS,
  FB_ADD_ERR,

  FB_READ_BEGIN,
  FB_READ_SUCCESS,
  FB_READ_ERR,

  FB_UPDATE_BEGIN,
  FB_UPDATE_SUCCESS,
  FB_UPDATE_ERR,

  FB_DELETE_BEGIN,
  FB_DELETE_SUCCESS,
  FB_DELETE_ERR,

  FB_SINGLE_DATA_BEGIN,
  FB_SINGLE_DATA_SUCCESS,
  FB_SINGLE_DATA_ERR,
} = actions;

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const initialStateSingle = {
  data: null,
  loading: false,
  error: null,
};

const fsCrudReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FB_ADD_BEGIN:
      return {
        ...initialState,
        loading: true,
      };

    case FB_ADD_SUCCESS:
      return {
        ...initialState,
        data,
        error: false,
        loading: false,
      };

    case FB_ADD_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };

    case FB_READ_BEGIN:
      return {
        ...initialState,
        loading: true,
      };

    case FB_READ_SUCCESS:
      return {
        ...initialState,
        data,
        error: false,
        loading: false,
      };

    case FB_READ_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };

    case FB_DELETE_BEGIN:
      return {
        ...initialState,
        loading: true,
      };

    case FB_DELETE_SUCCESS:
      return {
        ...initialState,
        error: false,
        data,
        loading: false,
      };

    case FB_DELETE_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };

    case FB_UPDATE_BEGIN:
      return {
        ...initialState,
        loading: true,
      };

    case FB_UPDATE_SUCCESS:
      return {
        ...initialState,
        data,
        error: false,
        loading: false,
      };

    case FB_UPDATE_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

const fsSingleCrudReducer = (state = initialStateSingle, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FB_SINGLE_DATA_BEGIN:
      return {
        ...initialStateSingle,
        loading: true,
      };

    case FB_SINGLE_DATA_SUCCESS:
      return {
        ...initialStateSingle,
        data,
        error: false,
        loading: false,
      };

    case FB_SINGLE_DATA_ERR:
      return {
        ...initialStateSingle,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

export { fsCrudReducer, fsSingleCrudReducer };
