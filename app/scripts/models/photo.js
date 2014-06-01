/**
 * Photo Model contains all attributes from the Flickr json response.  
 */


define(['backbone'], function(Backbone){
  var PhotoModel = Backbone.Model.extend({
    defaults: {
      id: null,
      secret: null,
      farm: null,
      title: null
    }
  });

  return PhotoModel;
});
