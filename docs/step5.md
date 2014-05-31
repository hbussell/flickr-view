# Step five

Now we have a view rendering to the page we can start looking at the data model and create a basic model and collection for our photos.

Create a Photo model extending Backbone.Model in `app/scripts/models/photo.js` to hold the photo fields from the flickr api.

Also create Photo Collection extending Backbone.Collection in `app/scripts/collections/photos.js` to work with Photo sets.
