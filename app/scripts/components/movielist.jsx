// 3rd party imports
var React = require('react');
var $ = require('jquery');
var _ = require("underscore");

// local imports
var models = require('../models/movies');
//components

class PopularMovieContainer extends React.Component{
  render(){
    console.log(this.props.popularMovies);
    var popularMovieList = this.props.popularMovies.map(function(movie){
      return <img src={movie.backdrop_path}></img>
    });
    return <p>hi</p>
  }
}

class MovieListsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      popularMovieCollection: ''
    };
  }
  componentWillMount() {
    var self = this;
    var popularMovies = new models.PopularMovieCollection();
    popularMovies.fetch().then(function(response){
      console.log(response);
      self.setState({popularMovieCollection: response});
    });
  }
  render(){
    return(
      <PopularMovieContainer popularMovies={this.state.popularMovieCollection}/>
    );
  }
}


module.exports = {
  MovieListsContainer: MovieListsContainer
}
