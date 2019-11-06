# Client-side-programming  ![Image description](https://jwt.io/img/badge-compatible.svg)

- Azure Pipeline: [![Build Status](https://dev.azure.com/LucJoosten1234/LucJoosten1234/_apis/build/status/LucJoostenNL.Client-side-programming?branchName=master)](https://dev.azure.com/LucJoosten1234/LucJoosten1234/_build/latest?definitionId=1&branchName=master) 

- GitLab Pipeline: [![pipeline status](https://gitlab.com/LucJoostenDev/Client-side-programming/badges/master/pipeline.svg)](https://gitlab.com/LucJoostenDev/Client-side-programming/commits/master)

- Coverage: [![coverage report](https://gitlab.com/LucJoostenDev/Client-side-programming/badges/master/coverage.svg)](https://gitlab.com/LucJoostenDev/Client-side-programming/commits/master)

This is an individual client-side programming assignment for the second period of my second year. In this assignment I had the opportunity to develop my own case. My case is to develop an asynchronous Task Manager as a SPA (Single Page Application). The benefits of a SPA is that the views of the pages won't be reloaded every time when you open a link, but the data still needs to be loaded when you enter a new viewpage. The benefit is that this is much faster than a multipage application where every page has to be loaded and reloaded when visiting a page for the second time.

------
# Front-end
* Vue.JS v2.6.10 as framework
* Vue CLI v4.0.5 to develop Single Page Applications
* Vue-Router v3.1.3 to use routing
* Vuex library to manage application state
* Vue-DevTools chrome plugin v5.3.2
---------------
# Back-end 
* Node.JS v10.15.3 for MEVN development
* NoSQL MongoDB for the database management 
* Express.JS to build a secure RESTful API
----------


## Project setup
```
npm install
```
### Compiles for development and starts up back-end
```
npm run dev
```

### Compiles for development and starts up front-end
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
