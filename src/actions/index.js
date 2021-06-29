export const addOrder = (data) =>{
    return {
        type: "ADD_ORDER",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}