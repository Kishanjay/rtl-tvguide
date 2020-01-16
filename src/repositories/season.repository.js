import config from "../config";

const BASE_URL = config.apiBaseUrl;
const RESOURCE = "seasons";

// fetches a season
export const getSeason = id => {
  if (!id) {
    throw Error("id required for getting season");
  }
  return fetch(`${BASE_URL}/${RESOURCE}/${id}`).then(res => res.json());
};

// fetches all episodes of a season
export const listSeasonEpisodes = id => {
  if (!id) {
    throw Error("id required for listing season episodes");
  }
  return fetch(`${BASE_URL}/${RESOURCE}/${id}/episodes`).then(res =>
    res.json()
  );
};

export default {
  get: getSeason,
  listEpisodes: listSeasonEpisodes
};
