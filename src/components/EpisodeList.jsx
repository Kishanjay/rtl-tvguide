import React from "react";
import PropTypes from "prop-types";

import Title from "./common/Title";

import "./EpisodeList.scss";

import EpisodeListItem from "./EpisodeListItem";

export default function EpisodeList(props) {
  const { episodes, showId, seasonNumber, loading } = props;

  if (!episodes) {
    return "loading..";
  }

  return (
    <section>
      <Title value={`Season ${seasonNumber}`} size={2} />
      <ul className="episode_list-component">
        {loading && <li>Loading</li>}
        {!loading &&
          episodes.map(episode => (
            <EpisodeListItem
              key={episode.id}
              episode={episode}
              showId={showId}
              seasonNumber={seasonNumber}
            />
          ))}
      </ul>
    </section>
  );
}

EpisodeList.propTypes = {
  loading: PropTypes.bool,
  showId: PropTypes.number.isRequired,
  seasonNumber: PropTypes.number.isRequired,
  episodes: PropTypes.array
};
EpisodeList.defaultProps = {
  loading: false,
  episodes: undefined
};
