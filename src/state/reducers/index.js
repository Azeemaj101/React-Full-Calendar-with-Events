import { combineReducers } from "redux";
import monthCount from "./monthCount";
import yearCount from "./yearCount";
import country from "./country";
import event from "./event";
const reducers = combineReducers({
    month: monthCount,
    year:yearCount,
    country:country,
    event:event
})
export default reducers