# Restaurant Review App Project

## Table of Contents

* [Instructions](#instructions)
* [User expectation](#User-expectation)
* [App dependencies](#App-dependencies)

## Instructions

The restaurant review app is used to review restaurants in a particular area with respect to their opening hours, locations and the meals they offer. The project folder contains an index.html file which is the home page that open up when the app is served. An additional restaurant.html file is also in the project folder which is the template for displaying individual restaurants. The js folder contains the javascripts files which powers the app. The main.js file loads the various html elements according to the template of the index. html file. The restaurant_info.js file loads the html elements on the screen according to the restaurant.html file. The dbhelper.js file is used to load and store data. The various data used in populating the pages are located in the restaurants.json file. The styles.css file contains all the styling for the application. The service worker is contained in the index.js file. The map is rendered via  leafletjs with Mapbox. A MAPBOX API KEY was obatined and included in the code used in initialising the map.

Start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 
To load the app, navigate to the project folder in a terminal, check the version of Python you have: python -V. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python3 -m http.server 8000. If you don't have Python installed, navigate to Python's website to download and install the software.
With your server running, visit the site: http://localhost:8000.

## User expectation
The app was modified from an unresponsive, inaccessible and strictly online form to a form that can be rendered on any platform from desktop to mobiles. Accessibilty features were also added and the app make use of the service worker cache api for storing data which can be utilized when the app is offline.

## App dependencies

The app was developed using javascript, html and css. The following framework/ tools were also used- Leaflet.js and Mapbox.The server and database was run using python.
