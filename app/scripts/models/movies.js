var Backbone = require('backbone');

var Movie = Backbone.Model.extend({

});

var PopularMovieCollection = Backbone.Collection.extend({
  model: Movie,
  url: function(){
    return 'https://api.themoviedb.org/3/movie/popular?' + 'api_key=fa055d219cea41c0663349907362bfcf';
  },
  parse: function(response) {
    return response.data;
  }
});

var PopularTVShow = Backbone.Model.extend({


});

var PopularTVShowCollection = Backbone.Collection.extend({
  model: PopularTVShow,
  url: function(){
    return 'https://api.themoviedb.org/3/discover/tv?' + 'api_key=fa055d219cea41c0663349907362bfcf';
  },
  parse: function(response) {
    return response.data;
  }
});


module.exports = {
  Movie: Movie,
  PopularMovieCollection: PopularMovieCollection,
  PopularTVShow: PopularTVShow,
  PopularTVShowCollection: PopularTVShowCollection
}
