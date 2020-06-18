import * as Types from '../Constants/ActionType';

var initialState = {
    store: {},
    stores: []
}
//Tìm index cần xóa
var findIndex = (stores, store_id) => {
    var result;
    //Duyệt qua mảng để tìm index
    stores.forEach((store, index) => {
        //Nếu có thì trả về index
        if (store.store_id === store_id) {
            result = store;
        }

    });
    return result;
}

const stores = (state = initialState, action) => {

    // switch (action.type) {

    //     case Types.FETCH_STORES:
            
    //         state = action.stores;
    //         return [...state]
    //         //return state;
    //     case Types.DELETE_STORE:        
    //         var index = findIndex(state, action.store_id);
            
    //         state.splice(index, 1);
    //         return [...state]

    //     default: 
    //         return [...state]

    // }

    switch (action.type) {

        case Types.FETCH_STORES: 
            
            //state.array = action.stores;
            return {...state, stores: action.stores};
            //return state;
        case Types.DELETE_STORE: 
          
            var index = findIndex(state.stores, action.store_id);
            //state.array.push(index);
            return {...state,
                stores: state.stores.filter((item) => item !== index)
                    
                   };
        case Types.ADD_STORE:
            return {
                ...state,
                stores: [...state.stores, action.store]
            }
        case Types.EDIT_STORE:
            return {
                ...state,
                store: action.store
            }
        case Types.UPDATE_STORE:
            return {
                ...state
            }
        case Types.SEARCH_STORE:
            return {...state, stores: action.stores};

        default: 
            return {...state};
    }
}
export default stores;