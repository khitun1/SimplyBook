import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {firstChoiceReducer} from "./firstChoiceReducer";
import {organizationReducer} from "./organizationReducer";
import {teachersReducer} from "./teachersReducer";
import {groupReducer} from "./groupReducer";
import {clientReducer} from "./clientReducer";
import {childrenReducer} from "./childrenReducer";
import {paymentReducer} from "./paymentReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    firstChoice: firstChoiceReducer,
    org: organizationReducer,
    teachers: teachersReducer,
    groups: groupReducer,
    clients: clientReducer,
    children: childrenReducer,
    payments: paymentReducer
})

export type RootState = ReturnType<typeof rootReducer>