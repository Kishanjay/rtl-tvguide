import React from "react";
import PropTypes from "prop-types";

import Title from "./common/Title";

import "./EpisodeList.scss";

import EpisodeListItem from "./EpisodeListItem";

export default function EpisodeList(props) {
  const { episodes, showId, seasonNumber } = props;

  if (!episodes) {
    return "loading..";
  }

  return (
    <section>
      <Title value={`Season ${seasonNumber}`} size={2} />
      <ul className="episode_list-component">
        {episodes.map(episode => (
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
  episodes: PropTypes.array,
  showId: PropTypes.number.isRequired,
  seasonNumber: PropTypes.number.isRequired
};
EpisodeList.defaultProps = {
  episodes: undefined
};
