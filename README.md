# Omnisearch Auto Info Bundle
The Omnisearch Auto Info Bundle opens a popup after a search was successful.

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_omnisearch_autoinfo/index.html

## Installation Guide
Add the bundle to your app and load an AGSSearch store with a layerId.

## Requirements
* map.apps 4.5.0 (or above)

## Restrictions
The layer needs to be loaded in the map and has to have a popup template.

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
