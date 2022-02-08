// import redux and create sotre
const redux = require('redux');
const createStore = redux.createStore;

// actions and actions type
const CHANGE_USER = 'CHANGE_USER';
const LOGOUT = 'LOGOUT';

// actions
function changeUser(user) {
    return {
        type: CHANGE_USER,
        info: 'Change the current user',
        payload: user,
    };
}

function logout() {
    return {
        type: LOGOUT,
        info: 'Logout current user',
    };
}

const initialState = {
    user: '',
    isLogged: false,
};

// reducers
function userReducer(prevState = initialState, action) {
    switch (action.type) {
        case CHANGE_USER:
            return {
                ...prevState,
                user: action.payload,
                isLogged: true,
            };
        case LOGOUT:
            return {
                ...prevState,
                user: '',
                isLogged: false,
            };
        default:
            return prevState;
    }
}

// store
const store = createStore(userReducer);

console.log('Initial state:', store.getState());

store.dispatch(changeUser('User 1'));
console.log('New state:', store.getState());

store.dispatch(logout());
console.log('New state:', store.getState());
