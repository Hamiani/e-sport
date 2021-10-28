import storeTypes from "../constants/store-types";
import leaguesReducer from "./leagues";
import teamsReducer from "./teams";
import playersReducer from "./players";

const reducers = {
  [storeTypes.LEAGUES]: leaguesReducer,
  [storeTypes.TEAMS]: teamsReducer,
  [storeTypes.PLAYERS]: playersReducer,
};

export default reducers;
