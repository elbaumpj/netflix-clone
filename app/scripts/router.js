//3rd party imports
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

//local imports
var PageContainer = require('./components/movielist.jsx').PageContainer;
//router

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(PageContainer, {router: this}),
      document.getElementById('app')
    );
  }
});


var router = new AppRouter();

module.exports = router;
