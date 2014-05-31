define([
    'jquery',
    'backbone',
    'collections/photos'
    ], 
function($, Backbone, PhotoCollection) {
  var App = Backbone.View.extend({

    el: '#photoapp',

    initialize: function() {
      var collection = new PhotoCollection();
      this.$el.html('Backbone Photo App loaded with collection!');
    }

  });

  return App;
});
