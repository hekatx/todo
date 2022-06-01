# Todo

Dead simple Todo-list site using React.

### Install 

This project requires json-server to be installed globally, run:

```
npm install -g json-server
```
Then just install dependencies with:
```
npm install
```

### Run
To run the front end client (defaults to port 3000):
```
npm run dev
```

And run 
```
npm run server
```
to initiate the mock API (defaults to port 5432, can be changed in package.json)

## Project structure
Main entry point is `src/App.tsx` where all providers are configured.
```
src
|
+-- assets            # self explainatory
|
+-- components        # shared components used across the entire application
|
+-- views         	  # view based app modules
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- hooks             # global hooks
|
+-- providers         # every provider needed
|
+-- routes            # routes configuration
|
+-- utils             # shared utility functions
```
