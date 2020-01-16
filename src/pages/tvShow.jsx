// • Show title
// • Show Description
// • Show cover image
// • Episode list.Every episode in the list should link to a details page for that specific episode
import React from "react";
import PropTypes from "prop-types";

import CoverImage from "../components/common/CoverImage";
import Title from "../components/common/Title";
import Subtitle from "../components/common/Subtitle";
import Description from "../components/common/DescriptionHtml";
import Button from "../components/common/Button";
import EpisodeList from "../components/EpisodeList";

import "./tvShow.scss";
import showRepository from "../repositories/show.repository";
import seasonRepository from "../repositories/season.repository";

const propTypes = {
  showId: PropTypes.number.isRequired
};

class PageTvShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tvShow: undefined,
      tvShowSeasons: undefined,

      selectedSeason: undefined
    };

    this.loadTvShowSeason = this.loadTvShowSeason.bind(this);
  }

  componentDidMount() {
    const { showId } = this.props;

    this.loadTvShow(showId);

    this.loadTvShowSeasons(showId).then(() => {
      const { tvShowSeasons } = this.state;

      const selectedSeason = tvShowSeasons.length ? tvShowSeasons[0] : null;
      this.loadTvShowSeason(selectedSeason);
    });
  }

  loadTvShow(showId) {
    return showRepository
      .get(showId)
      .then(response => {
        this.setState({
          tvShow: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  loadTvShowSeasons(showId) {
    return showRepository
      .listSeasons(showId)
      .then(response => {
        this.setState({
          tvShowSeasons: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  loadTvShowSeason(season) {
    const seasonId = season.id;
    return seasonRepository
      .listEpisodes(seasonId)
      .then(response => {
        this.setState({
          selectedSeasonEpisodes: response,
          selectedSeason: season
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { showId } = this.props;
    const {
      tvShow,
      tvShowSeasons,
      selectedSeasonEpisodes,
      selectedSeason
    } = this.state;

    if (!tvShow) {
      return "Loading";
    }

    const coverImage = tvShow.image ? tvShow.image.original : null;
    const title = tvShow.name;
    const subtitleLeft = tvShow.genres.join(",");
    const subtitleRight = `(${tvShow.rating.average}/10)`;
    const description = tvShow.summary;

    return (
      <div className="tv_show">
        <header className="tv_show__header">
          <h3 className="header__title">{showId}</h3>
          {coverImage && <CoverImage value={coverImage} />}
        </header>

        <main className="tv_show__main">
          <div className="tv_show__metadata">
            <Title value={title} />
            <div className="main__subtitle">
              <Subtitle value={subtitleLeft} />
              <Subtitle value={subtitleRight} />
            </div>
            <Description value={description} />
          </div>

          {tvShowSeasons && (
            <nav className="tv_show__seasons">
              {tvShowSeasons.map(s => (
                <Button
                  style={
                    selectedSeason && s.id === selectedSeason.id
                      ? "success"
                      : ""
                  }
                  key={s.id}
                  onClick={() => this.loadTvShowSeason(s)}
                  value={`Season ${s.number}`}
                />
              ))}
            </nav>
          )}

          {selectedSeason && (
            <section className="tv_show__episodes">
              <EpisodeList
                showId={showId}
                seasonNumber={selectedSeason.number}
                episodes={selectedSeasonEpisodes}
              />
            </section>
          )}
        </main>
      </div>
    );
  }
}

PageTvShow.propTypes = propTypes;

export default PageTvShow;
