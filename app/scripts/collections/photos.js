
define(['backbone', 'models/photo'], function(Backbone, Photo){
  var PhotoCollection = Backbone.Collection.extend({
    model: Photo,

    initialize: function () {
        console.log('init collection');
        this.on('change', function() {
          console.log('change listener');
        });

        this.on('add', function() {
          console.log('add listener');
        });

    }
  });

  return PhotoCollection;
});
