
define(['backbone', 'models/photo'], function(Backbone, Photo){
  var PhotoCollection = Backbone.Collection.extend({
    model: Photo
  });

  return PhotoCollection;
});
