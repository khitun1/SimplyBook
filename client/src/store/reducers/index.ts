import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {firstChoiceReducer} from "./firstChoiceReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    firstChoice: firstChoiceReducer,
})

export type RootState = ReturnType<typeof rootReducer>