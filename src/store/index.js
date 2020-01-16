// Note:
// due to the current size of the application it doesn't make
// sense to split these features into seperate files/folders
import { combineReducers, createStore } from "redux";

// actions
export const toggleEpisodeSeen = episode => ({
  type: "TOGGLE_EPISODE_SEEN",
  episode
});

// reducers
export const seenEpisodes = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_EPISODE_SEEN": {
      const episodeId = action.episode.id;
      const currentSeenStatus = episodeId in state ? state[episodeId] : false;
      const result = { ...state, [episodeId]: !currentSeenStatus };
      return result;
    }
    default:
      return state;
  }
};

export const reducers = combineReducers({
  seenEpisodes
});

// store
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
