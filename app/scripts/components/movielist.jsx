// 3rd party imports
var React = require('react');
var $ = require('jquery');
var _ = require("underscore");

// local imports
var models = require('../models/movies');
//components

class NavBarComponent extends React.Component {
  render() {
    return (
      <nav className="clearfix">
        <img src={'./images/netflix-logo.jpg'} />
        <li>Browse</li>
        <li>My List</li>
        <li>Top Picks</li>
        <li>Recent</li>
      </nav>
    )
  }
}

class PageBodyComponent extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="clearfix">
          <div className="header-container" style={{backgroundImage: 'url(./images/narcos-header.jpg)'}}>
            <img id="narcos-logo" src={'http://www.returndates.com/backgrounds/narcos.logo.png'} />
            <div className="show-description">
              <h3>Watch Season 2 Now</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div>
                <a href="#" className="play-button col-md-5" placeholder="Watch Now">Play</a>
                <a href="#" className="button col-md-offset-1 col-md-6" placeholder="+ My List">+ My List</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

class PopularMovieComponent extends React.Component {
  render(){
    console.log(this.props.popularMovies)
    var popularMovieImages = this.props.popularMovies.map(function(movie, i){
      var moviePoster = 'http://image.tmdb.org/t/p/original' + movie.backdrop_path
        if (i < 5) {
          return <img className="movie-panel" key={movie.id} src={moviePoster} />
        }
      });
  return (
    <div className="movie-row">
      <h4>Trending Now</h4>
      {popularMovieImages}
    </div>
    );
  }
}

class PopularTVComponent extends React.Component {
  render(){
    console.log(this.props.popularShows)
    var popularTVImages = this.props.popularShows.map(function(movie, i){
      var moviePoster = 'http://image.tmdb.org/t/p/original' + movie.backdrop_path
        if (i < 5) {
          return <img className="movie-panel" key={movie.id} src={moviePoster} />
        }
      });
  return (
    <div className="movie-row">
      <h4>Top TV Picks for Peter</h4>
      {popularTVImages}
    </div>
    );
  }
}



class PageContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      popularMovieCollection: [],
      popularShowCollection: []
    };
  }
  componentWillMount() {
    var self = this;
    var popularMovies = new models.PopularMovieCollection();
    var popularShows = new models.PopularTVShowCollection();
    popularMovies.fetch().then((response) => {
      this.setState({
        popularMovieCollection: response.results
      });
    });
    popularShows.fetch().then((response) => {
      this.setState({
        popularShowCollection: response.results
      });
    });
  }
  render(){
    return(
      <div>
        <NavBarComponent />
        <PageBodyComponent />
        <PopularMovieComponent popularMovies={this.state.popularMovieCollection}/>
        <PopularTVComponent popularShows={this.state.popularShowCollection}/>
      </div>
    );
  }
}


module.exports = {
  PageContainer: PageContainer
}
