/**
 * Photo Collection handles searching the Flickr api and managing Photo models
 */

define([
  'jquery',
  'backbone',
  'models/photo'
], 
       function($, Backbone, Photo){
  var PhotoCollection = Backbone.Collection.extend({
    model: Photo,

    /**
     * Search the flickr rest api and and create instances Photo for each result.
     * @param string text
     */
    search: function(text){ 

      // Clear any photos from the list to start fresh.
      this.reset();
      // Show the loading spinner.
      $('#photoapp .loading').show();
      var collection = this;

      // Make the GET request to the Flickr api.
      // @todo replace the hardcoded api key.
      $.ajax({
          url: "https://api.flickr.com/services/rest/?api_key=a78f8fe48bd6c6c1ec4740eb33f90c13&method=flickr.photos.search&text="+text+"&format=json&jsoncallback=?&per_page=12",
          type: "GET",
          cache: true,
          dataType: 'jsonp',
          success: function(data) {
            for (key in data.photos.photo) {
              var photoData = data.photos.photo[key];
              // Create new photo model using the json data.
              var photo = new Photo(photoData);
              // Once its added to the collection it will be rendered.
              collection.add(photo);
            }

            $('#photoapp .loading').hide();
          }
      });

      
    }
  });

  return PhotoCollection;
});
