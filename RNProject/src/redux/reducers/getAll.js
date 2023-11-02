const InitialState = {
    data: null,
    isLoading: false,
    isError:false,
    messageError:'',
    isSuccess:false
}

export const getAllReducer = (state= InitialState,{type,payload}) => {
    switch(type){
        case "GET_ALL_REQUEST":
            return{
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false,
            }
        case "GET_ALL_SUCCESS":
            return{
                ...state,
                isLoading:false,
                isError:false,
                isSuccess:true,
                data:payload.data,
                messageError:''
            }
        case "GET_ALL_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
                isSuccess:false,
                messageError:payload
            }
        default:
            return state
    }
}

export default getAllReducer