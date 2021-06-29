const initialData = {
    orders : []
}

const orderReducer = ( state=initialData, action ) => {
    switch(action.type){
        case "ADD_ORDER":

            const { id, data }= action.payload;
            return {
                ...state,
                orders: [
                    ...state.orders,
                    {
                        id:id,
                        data:data,
                    }
                ]
            }

            default: return state;
    }
}

export default orderReducer;