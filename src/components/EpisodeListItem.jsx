import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Subtitle from "./common/Subtitle";
import Title from "./common/Title";
import Description from "./common/DescriptionHtml";

import "./EpisodeListItem.scss";

function EpisodeListItem(props) {
  const { episode, showId, seasonNumber, seenEpisodes } = props;

  const seen = episode.id in seenEpisodes ? seenEpisodes[episode.id] : false;

  return (
    <li
      className={`episode_list_item-component ${seen ? "seen" : ""}`}
      key={episode.id}
    >
      <Link
        to={`/show/${showId}/season/${seasonNumber}/episode/${episode.number}`}
      >
        <div className="list_item__box">
          <Subtitle value={`Episode ${episode.number}`} />
          <Title value={episode.name} size={4} />
          <Description value={episode.summary || "<i>no description</i>"} />
        </div>
      </Link>
    </li>
  );
}

EpisodeListItem.propTypes = {
  episode: PropTypes.object.isRequired,
  showId: PropTypes.number.isRequired,
  seasonNumber: PropTypes.number.isRequired,

  seenEpisodes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  seenEpisodes: state.seenEpisodes
});

export default connect(mapStateToProps)(EpisodeListItem);
