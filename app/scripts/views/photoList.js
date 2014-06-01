define([
    'jquery',
    'backbone',
    'underscore'
    ], 
function($, Backbone) {
  var PhotoList = Backbone.View.extend({

    el: '#photo-list',

    template: _.template($('#photosTemplate').html()),

    initialize: function(options) {
      this.collection = options.collection;
      this.collection.bind('reset',this.render.bind(this));
      this.collection.bind('add', this.render.bind(this));
      this.collection.bind('change', this.render.bind(this));
      this.render();
    },

    render: function() {
      this.$el.html(this.template({photos: this.collection.toJSON()}));
    }

  });

  return PhotoList;
});
