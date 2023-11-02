const InitialState = {
  data: null,
  isLoading: false,
  isError: false,
  messageError: '',
  isSuccess: false,
};

export const getDetailReducer = (state = InitialState, {type, payload}) => {
  switch (type) {
    case 'DETAIL_PORTOFOLIO_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'DETAIL_PORTOFOLIO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: payload.data,
        messageError: '',
      };
    case 'DETAIL_PORTOFOLIO_FAILED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        messageError: payload,
      };
    default:
      return state;
  }
};

export default getDetailReducer;
