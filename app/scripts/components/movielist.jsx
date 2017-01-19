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
    // console.log('hey!', this.props.popularMovies);
    // var popularMovieList = this.props.popularMovies.map(function(movie){
    //   return <img src={movie.backdrop_path}></img>
    // });
    return <p></p>//{popularMovieList}
  }
}

class PageContainer extends React.Component {
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
      console.log(response.results);
      self.forceUpdate({popularMovieCollection: response.results});
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
