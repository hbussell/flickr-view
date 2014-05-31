
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
