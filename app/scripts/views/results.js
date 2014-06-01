define([
    'jquery',
    'backbone',
    'collections/photos'
    ], 
function($, Backbone, PhotoCollection) {
  var Results = Backbone.View.extend({

    el: '#photo-results',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html( 'Photo results...');
    }

  });

  return Results;
});
