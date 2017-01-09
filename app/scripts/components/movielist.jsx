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
      <nav>
        <img src={'./images/netflix-logo.jpg'} />
        <li className="no-style">Browse</li>
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
        <img src={'../images/narcos.png'} />
      )
  }
}

class PopularMovieComponent extends React.Component {
  render(){
    // console.log(this.props.popularMovies);
    // var popularMovieList = this.props.popularMovies.map(function(movie){
    //   return <img src={movie.backdrop_path}></img>
    // });
    return <p>hi</p>
  }
}

class PageContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      popularMovieCollection: ''
    };
  }
  // componentWillMount() {
  //   var self = this;
  //   var popularMovies = new models.PopularMovieCollection();
  //   popularMovies.fetch().then(function(response){
  //     console.log(response);
  //     self.setState({popularMovieCollection: response});
  //   });
  // }
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
