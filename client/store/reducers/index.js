import {combineReducers} from "redux";
import booksFeed from "./booksFeed";

export default function createReducer(){
    return combineReducers({booksFeed});
}