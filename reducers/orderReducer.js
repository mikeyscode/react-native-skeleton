import { combineReducers } from 'redux';

const INITIAL_STATE = {
    orderList: [
        {name: 'Hot Chocolate', cost: 1.75, size: 'Grande', tag: '123456789'}
    ],
};

const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            const {
                orderList
            } = state;

            orderList.push(action.payload);

            return { orderList }
        default:
            return state
    }
};

export default combineReducers({
    orders: orderReducer
});