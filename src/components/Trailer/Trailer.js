import React from 'react';

class Trailer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundClass: "show",
            iframeClass: "hide",
            trailerClass: ""
        };
    }

    handleClick = () => {
        this.setState({
            backgroundClass: "hide",
            iframeClass: "show",
            trailerClass: "trailer__grow"
        });
    };

    render() {
        const { backgroundClass, trailerClass, iframeClass } = this.state;
        const { movie } = this.props;

        return (
            <div className={`trailer ${trailerClass}`}>
                <div
                  className={`trailer__background ${backgroundClass}`}
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${
                      movie.backdrop_path
                    })`
                  }}
                >
                <div className="trailer__play" onClick={this.handleClick}>
                  <div className="trailer__play--circle">
                    <div className="trailer__play--triangle"></div>
                  </div>
                  <p>Trailer</p>
                </div>
              </div>
                <iframe
                  title="movie trailer"
                  src={`https://www.youtube.com/embed/${
                    movie.videos.results[0].key
                  }`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className={iframeClass}
                />
            </div>
        )
    }
}

export default Trailer;
