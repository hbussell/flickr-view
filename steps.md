# Step one
Clone the repo and run getting started steps.
This will read the package.json manifest and run the preinstall script to install yeoman globally.

# Step two
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


# Step three

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

    grunt server



