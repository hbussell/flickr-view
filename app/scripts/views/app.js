define([
    'jquery',
    'backbone',
    ], 
function($, Backbone) {


  var App = Backbone.View.extend({

    el: '#photoapp',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html('Photo app loaded!');
    }
  });

  return App;
});
