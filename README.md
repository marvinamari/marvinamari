:q:q marvinamari
This is my personal website code located at marvinamari.com feel free to use and/or contribute.

Project Structure:
.
+--- src
|   +--- client
|   |   +---
|   +--- server
|   |   +--- controllers
|   |   +--- node_modules
|   |   +--- models
|   |   +--- validators

Authentication:
Four routes were created signup, signin, signout, as well as route to verify
current session. The controllers for each route can be found at src/server/controllers/authControllers.js.
Validations for each route are located at src/server/validations/authValidations.js.

To install node dependencies from a running container:
docker exec -it node-api /bin/bash -c "chmod 755 ./nodeDeps.sh;./nodeDeps.sh;chmod 644 ./nodeDeps.sh"
docker run -it --rm -v ${PWD}:/var/app -w /var/app node:15 npx create-next-app
