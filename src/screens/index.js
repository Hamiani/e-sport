import Leagues from "./Leagues";
import NotFound from "../Shared/NotFound";
import Teams from "./Teams";
import Players from "./Players";

const routes = [...Leagues, ...Teams, ...Players, { component: NotFound }];

export default routes;
