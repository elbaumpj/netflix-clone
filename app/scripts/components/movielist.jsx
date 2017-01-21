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


class PageContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      popularMovieCollection: []
    };
  }
  componentDidMount() {
    var self = this;
    var popularMovies = new models.PopularMovieCollection();
    popularMovies.fetch().then((response) => {
      this.setState({
        popularMovieCollection: response.results
      });
    });
  }
  render(){
    return(
      <div>
        <NavBarComponent />
        <PageBodyComponent />
        <PopularMovieComponent popularMovies={this.state.popularMovieCollection}/>
      </div>
    );
  }
}


module.exports = {
  PageContainer: PageContainer
}
