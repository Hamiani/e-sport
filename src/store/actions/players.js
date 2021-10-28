import api from "../../utils/api/players";
import { CommonActionTypes } from "../constants/action-types";
import { PlayersActionsBuilder } from "../constants/actions-builder";

export const get = (query, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: PlayersActionsBuilder.GET,
  promise: () => api.get(query),
  successCallback,
  errorCallback,
});
