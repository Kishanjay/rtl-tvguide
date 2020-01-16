import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useParams
} from "react-router-dom";

import config from "./config";

import PageTvShow from "./pages/tvShow";
import PageTvShowEpisode from "./pages/tvShowEpisode";

function RenderPageTvShow() {
  const { showId } = useParams();
  return <PageTvShow showId={parseInt(showId, 10)} />;
}

function RenderPageTvShowEpisode() {
  const { showId, seasonNumber, episodeNumber } = useParams();

  return (
    <PageTvShowEpisode
      showId={parseInt(showId, 10)}
      seasonNumber={parseInt(seasonNumber, 10)}
      episodeNumber={parseInt(episodeNumber, 10)}
    />
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to={`/show/${config.defaultShowId}`} />

        <Route path="/show/:showId/season/:seasonNumber/episode/:episodeNumber">
          <RenderPageTvShowEpisode />
        </Route>
        <Route path="/show/:showId">
          <RenderPageTvShow />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
