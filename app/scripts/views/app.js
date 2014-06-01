define([
    'jquery',
    'backbone',
    'collections/photos',
    'views/photoList',
    'models/photo'
    ], 
function($, Backbone, PhotoCollection, PhotoListView, PhotoModel) {

  var photoListView;
  var photoCollection;

  var App = Backbone.View.extend({

    el: '#photoapp',


    events: {
      'click button' : 'doSearch'
    },

    doSearch: function(){
      var search = $('#search-box').val();
      photoCollection.add(new PhotoModel({id:search}));
    },

    initialize: function() {
      photoCollection = new PhotoCollection();
      photoListView = new PhotoListView({collection: photoCollection});
    },

  });

  return App;
});
