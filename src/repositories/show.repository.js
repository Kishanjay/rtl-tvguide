import config from "../config";

const BASE_URL = config.apiBaseUrl;
const RESOURCE = "shows";

// fetches a show
export const getShow = id => {
  if (!id) {
    throw Error("id required for getting tv show");
  }
  return fetch(`${BASE_URL}/${RESOURCE}/${id}`).then(res => res.json());
};

export const getShowEpisodeByNumber = (id, seasonId, episodeNumber) => {
  if (!id) {
    throw Error("id required for getting tv show episode by number");
  }
  if (!seasonId) {
    throw Error("seasonId required for getting tv show episode by number");
  }
  if (!episodeNumber) {
    throw Error("episodeNumber required for getting tv show episode by number");
  }
  return fetch(
    `${BASE_URL}/${RESOURCE}/${id}/episodebynumber?season=${seasonId}&number=${episodeNumber}`
  ).then(res => res.json());
};

// fetches all episodes of a show
export const listShowEpisodes = id => {
  if (!id) {
    throw Error("id required for listing tv show episodes");
  }
  return fetch(`${BASE_URL}/${RESOURCE}/${id}/episodes`).then(res =>
    res.json()
  );
};

// fetches all seasons of a show
export const listShowSeasons = id => {
  if (!id) {
    throw Error("id required for listing tv show seasons");
  }
  return fetch(`${BASE_URL}/${RESOURCE}/${id}/seasons`).then(res => res.json());
};

export default {
  get: getShow,
  listEpisodes: listShowEpisodes,
  getEpisodeByNumber: getShowEpisodeByNumber,
  listSeasons: listShowSeasons
};
