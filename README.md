⚠️ This bundle is no longer needed for map.apps line 4. Since map.apps 4.9.0 opening a popup after a search is a core functionality.

# Omnisearch Auto Info Bundle
The Omnisearch Auto Info Bundle opens a popup after a search was successful.

## Installation Guide
**Requirement: map.apps 4.5.0**

[dn_omnisearchautoinfo Documentation](https://github.com/conterra/mapapps-omnisearch-autoinfo/tree/master/src/main/js/bundles/dn_omnisearchautoinfo)

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
