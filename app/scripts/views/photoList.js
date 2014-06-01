define([
    'jquery',
    'backbone',
    ], 
function($, Backbone) {
  var PhotoList = Backbone.View.extend({

    el: '#photo-list',

    initialize: function(options) {
      this.collection = options.collection;
      this.collection.bind('reset',this.render.bind(this));
      this.collection.bind('add', this.render.bind(this));
      this.collection.bind('change', this.render.bind(this));
      this.render();
    },

    render: function() {
      this.$el.html( 'Photo count:' + this.collection.length);
    }

  });

  return PhotoList;
});
