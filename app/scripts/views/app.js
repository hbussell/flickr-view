define([
    'jquery',
    'backbone',
    'collections/photos',
    ], 
function($, Backbone, PhotoCollection) {


  var App = Backbone.View.extend({

    el: '#photoapp',


    initialize: function() {
      photoCollection = new PhotoCollection();
      this.render();
    },

    render: function() {
      this.$el.html('Photo app loaded!');
    }
  });

  return App;
});
