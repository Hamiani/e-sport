import List from "./List";
import { PATHS } from "../../utils/constants";
import { MapRoutes } from "../../utils/helpers";
import Layout from "../../Shared/Layout";

const routes = [{ exact: true, component: List, path: PATHS.PLAYERS.LIST }];

export default MapRoutes(routes, Layout);
