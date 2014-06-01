/**
 * App View is the main view which connects the PhotoCollection to the PhotoListView
 * and handles user events from the search form.
 */ 
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

    
    /**
     * Bind dom events to functions in the view.
     */
    events: {
      'click button' : 'doSearch'
    },

    /** 
     * Search button event handler.
     */
    doSearch: function(){
      var search = $('#search-box').val();
      // Trigger the photo collection to do a new search.
      photoCollection.search(search);
    },

    initialize: function() {
      // Create new instances of the collection and list view and bind the list to the collection.
      photoCollection = new PhotoCollection();
      photoListView = new PhotoListView({collection: photoCollection});
    },

  });

  return App;
});
