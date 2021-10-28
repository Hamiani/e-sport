import { actions } from "../../reducers/players";
import { PlayersActionTypes } from "../action-types";

const leaguesActionsBuilder = {
  GET: {
    START: actions[PlayersActionTypes.GET.START],
    SUCCESS: actions[PlayersActionTypes.GET.SUCCESS],
    FAIL: actions[PlayersActionTypes.GET.FAIL],
  },
};

export default leaguesActionsBuilder;
