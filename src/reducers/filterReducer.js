const filterReducer = (state, action) => {
    switch(action.type){
        case 'PRICE': 
            return {
                ...state,
                price: Number(action.payload)
            }

        case 'DISCOUNT': 
            return {
                ...state,
                discount: Number(action.payload)
            }

        case 'RATING': 
            return {
                ...state,
                rating: Number(action.payload)
            }

        default: 
            return state
    }

}

export default filterReducer