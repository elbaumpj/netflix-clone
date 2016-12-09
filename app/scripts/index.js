var $ = require('jquery');
var Backbone = require('backbone');
require('./router');

$(function(){
  Backbone.emulateHTTP = true;

  Backbone.history.start();
});
