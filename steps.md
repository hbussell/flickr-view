# Step one
Clone the repo and run getting started steps.
This will read the package.json manifest and run the preinstall script to install yeoman globally.

# Step two
Use the yeoman generator for backbone-amd to setup a basic project.
https://github.com/abiee/generator-backbone-amd
Add backbone-amd to devDependancies in package.json

  npm install . --save-dev

Now run the yeoman generator

  yo backbone-amd

Ensure requirejs is selected.
You will be prompted to overrite the existing package.json and .gitignore, hit y to continue.

Now lets use the generator to create our Photo model.

   yo backbone-amd:model Photo
