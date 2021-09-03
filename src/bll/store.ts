import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterSetterReducer} from "./counterSetter-reducrer";
import thunk from "redux-thunk";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counterSetter: counterSetterReducer,
    counter: counterReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))


export type AppRootStateType = ReturnType<typeof rootReducer>
