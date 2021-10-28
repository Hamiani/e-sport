import { api } from "./fetcher";

const leagueApi = {
  get: (query) => api.get("/players", { query }),
};

export default leagueApi;
