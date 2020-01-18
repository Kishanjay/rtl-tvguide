// • Episode title
// • Episode Summary
// • Episode cover image
import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleEpisodeSeen as toggleEpisodeSeenAction } from "../store";

import PageFooter from "./partials/PageFooter";

import CoverImage from "../components/common/CoverImage";
import Title from "../components/common/Title";
import Subtitle from "../components/common/Subtitle";
import Description from "../components/common/DescriptionHtml";
import Button from "../components/common/Button";

import showRepository from "../repositories/show.repository";

import "./tvShowEpisode.scss";

const propTypes = {
  showId: PropTypes.number.isRequired,
  seasonNumber: PropTypes.number.isRequired,
  episodeNumber: PropTypes.number.isRequired,
  seenEpisodes: PropTypes.object.isRequired,
  toggleEpisodeSeen: PropTypes.func.isRequired
};

class PageTvShowEpisode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      episode: undefined
    };
  }

  componentDidMount() {
    const { showId, seasonNumber, episodeNumber } = this.props;
    this.loadEpisode(showId, seasonNumber, episodeNumber);
  }

  loadEpisode(showId, seasonNumber, episodeNumber) {
    return showRepository
      .getEpisodeByNumber(showId, seasonNumber, episodeNumber)
      .then(response => {
        this.setState({
          episode: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const {
      showId,
      seasonNumber,
      episodeNumber,
      seenEpisodes,
      toggleEpisodeSeen
    } = this.props;

    const { episode } = this.state;
    if (!episode) {
      return "loading";
    }

    const seen = episode.id in seenEpisodes ? seenEpisodes[episode.id] : false;
    const coverImage = episode.image ? episode.image.original : null;
    const airedData = `${episode.airdate} [${episode.airtime}]`;
    const description = episode.summary || "<i>No description</i>";
    return (
      <div className="tv_show_episode-wrapper">
        <nav className="tv_show_episode__nav">
          <Link to={`/show/${showId}`}>
            <Button value="Go back" />
          </Link>
        </nav>
        <div className="tv_show_episode">
          <header className="tv_show_episode__header">
            <Title value={`S${seasonNumber}E${episodeNumber}`} size={3} />
            {coverImage && <CoverImage value={coverImage} />}
            {seen && <Subtitle value="Already seen" />}
          </header>

          <main className="tv_show_episode__main">
            <div className="tv_show_episode__metadata">
              <Title value={episode.name} />
              <div className="main__subtitle">
                <Subtitle value={airedData} />
              </div>
              <Description value={description} />
            </div>
            <Button
              onClick={() => {
                toggleEpisodeSeen(episode);
              }}
              value={seen ? "Mark as unseen" : "Mark as seen"}
            />
          </main>
        </div>
        <PageFooter />
      </div>
    );
  }
}

PageTvShowEpisode.propTypes = propTypes;

const mapStateToProps = state => ({
  seenEpisodes: state.seenEpisodes
});

const mapDispatchToProps = dispatch => ({
  toggleEpisodeSeen: episode => dispatch(toggleEpisodeSeenAction(episode))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageTvShowEpisode);
