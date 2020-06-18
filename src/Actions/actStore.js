import * as Types from './../Constants/ActionType';
import callApi02 from '../Utils/apiCaller02';

export const actFetchStoresRequest = () => {
    return (dispatch) => {
        return callApi02('store/all', 'GET', null).then(res => {
            dispatch(actFetchStores(res.data));
        })
    }
}
export const actFetchStores = (stores) => {
    return {
        type: Types.FETCH_STORES,
        stores
    }
}

// delete
export const actDeleteStoresRequest = (store_id) => {
    return (dispatch) => {
        return callApi02(`store/delete/${store_id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteStore(store_id));
        })
    }
}
export const actDeleteStore = (store_id) => {
    return {
        type: Types.DELETE_STORE,
        store_id
    }
}

//add
export const actAddStoreRequest = (store) => {
    return (dispatch) => {
        return callApi02('store/register', 'POST', store).then(res => {
            dispatch(actAddStore(store))
        });
    }
}
export const actAddStore = (store) => {
    return {
        type: Types.ADD_STORE,
        store
    }
}
//get store by id
export const actGetStoreRequest = (store_id) => {
    return (dispatch) => {
        return callApi02(`store/${store_id}`, 'GET', null).then(res => {
            dispatch(actGetStore(res.data));
        });
    }
}
export const actGetStore = (store) => {
    return {
        type: Types.EDIT_STORE,
        store
    }
}
//update
export const actUpdateStoreRequest = (store) => {
    return (dispatch) => {
        return callApi02(`store/update/${store.store_id}`, 'PUT', store).then(res => {
            dispatch(actUpdateStore(store));
        });
    }
}
export const actUpdateStore = (store) => {
    return {
        type: Types.UPDATE_STORE,
        store
    }
}
//search
export const actSearchStoreRequest = (textSearch) => {
    return (dispatch) => {
        return callApi02(`store/search?text=${textSearch}`, 'GET', textSearch).then(res => {
            dispatch(actSearchStore(res.data));
        });
    }
}
export const actSearchStore = (stores) => {
    return {
        type: Types.SEARCH_STORE,
        stores
    }
}