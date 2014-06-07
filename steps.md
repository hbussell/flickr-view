# Step one - Getting started
Clone the repo and run getting started steps.
This will read the package.json manifest and run the preinstall script to install yeoman globally.

# Step two - Yeoman generator
Use the yeoman generator for backbone-amd to setup a basic project.
https://github.com/abiee/generator-backbone-amd

Add backbone-amd to devDependencies in package.json

See https://www.npmjs.org/doc/json.html#devDependencies

    npm install . --dev

Now run the yeoman generator

    yo backbone-amd

Select sass
Ensure requirejs is selected.
You will be prompted to overrite the existing package.json and .gitignore, hit y to continue.

Now lets use the generator to create our Photo model.

    yo backbone-amd:model Photo


# Step three - Domain setup

Lets setup the domain and view the site in the browser to check the setup has worked.

Copy conf/apache.conf.dist to /etc/apache2/sites-enabled/ and update the path to fit where you created this project.

Restart apache service

    sudo service apache2 restart

Add the domain to your /etc/hosts file

    127.0.0.1 local.flickrview
  
Use grunt to compile our sass and package the js ready to use.  
Note the --force optionis used to ignore any jshint errors.

    grunt --force

You can now load the domain in your browser and see a styled application.

Try using the grunt built in server to test out its development mode.

    grunt serve


# Step four - Backbone App View

Lets render our app with backbone by creating the main application view in app/scripts/views/app.js

It will be a backbone view which defines an intialize hook and renders some content into into the dom using a `el` attribute as the target selector.

Define a render method in the view which sets the html on the $el property.

Check the page displaying the rendered content using `grunt server`


# Step five - Backbone Model

Now we have a view rendering to the page we can start looking at the data model and create a basic model and collection for our photos.

Create a Photo model extending Backbone.Model in app/scripts/models/photo.js to hold the photo fields from the flickr api.

Also create Photo Collection extending Backbone.Collection in app/scripts/collections/photos.js to work with Photo sets.


# Step six - User Search

At this point we have the core foundation for our backbone application and can start getting into the functional requirements of our application.

The first requirement is to display a list of photos based of a user search, so we need a component to display photos, something to handle user search and then some way to connect up the events. To add a user search form we can just add the input tags to the `index.html` under the `#photoapp` div so the App view can capture form events.
Then to display the photo list we should add a new `PhotoListView` which can take a reference to a `PhotoCollection` and render the photo details.  Then connecting the elements together can be done in the `AppView` by creating the `PhotoListView` and passing in an instance of the `PhotoCollection`.  That way the `AppView` can update the collection and changes will be automaticaly rendred in the list.  

To add the event listener to the `AppView` we can use the `events` attribute provideded by backbone views which maps selectors to function names.  In the event handler we can add new `PhotoModel` instances to the collection which will trigger the list to render.

Confim you can do a seach and the list count increments.


# Step seven - Template Rendering

Now lets start rendering the photo collection from the `PhotoListView`.  The view has a reference to the collection models and just needs to pass that through to an underscore template.  The template can be a script tag with in the `index.html` which loops over a list of photos and prints their ids.  

# Step eight - Connecting to Flickr Api

At this point we should have a basic application that renders lists of photo models after a user does a search using fake photo data.  Lets replace the fake data with real Flickr results.


Have a look at the Flickr Api exporer to see what options are available for the search end point and what data you get back.
https://www.flickr.com/services/api/explore/flickr.photos.search


Add a new search function to the `PhotoCollection` which can take a search string and fire off a request to the Flickr api.  
The results can be created into new `PhotoModel`s and added to the collection, causing the view to render.
The `AppView` already has a function to handle the search and has a reference to the collection so it only needs to call the search function passing the users search text.

Currently the api key used is hard coded but you create a new one by registering your own app https://www.flickr.com/services/apps/create/

# Step nine - Convert to angular

Now lets get to Angular and use some of its superpowers in this application.

Another change is from requirejs to browserify.  The motivation is the increased simplicity of modules using the commonjs syntax and not having to use callbacks.

Following this blog post we can setup a basic angular browserify project http://ethanway.com/angular-and-browserify/.

As all the dependencies have been added to the package.json you can simply run install and start to give this a go.

    npm install
    npm start

