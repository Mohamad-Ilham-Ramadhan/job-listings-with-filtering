import { combineReducers } from "redux";
import fetchJobs from "../api/fetchJobs";
import database from "../api/database.json";

function jobs(state = [], action) {
  return fetchJobs(database);
}

function selectedTags(state = [], action) {
  switch (action.type) {
    case "ADD_TAG":
      if (state.find((tag) => tag == action.value)) {
        return state;
      } else {
        return [...state, action.value];
      }
    case "CLEAR_TAGS":
      return [];
    case "DELETE_TAG":
      return state.filter((tag) => action.value !== tag);
    default:
      return ["Frontend", "React", "JavaScript"];
  }
}

const reducers = combineReducers({ jobs, selectedTags });

export default reducers;
