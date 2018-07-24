## Using this project
This project used create-react-app.  After using c3js several times, I extracted the component to keep separately for reuse.  Here it is.  Be sure all dependencies in package.json are installed before starting it up.  

 `npm start` will start the project.  Navigate to [http://localhost:3000](http://localhost:3000) once the project starts up.

 Checkout the [DEMO](https://tml123.github.io/react-c3/).

 The two examples provided show a static donut chart as well as a "real time" line graph using a c3js flow function.  You can read more about the interface for c3js [here](https://c3js.org/).  Using this project is really a React wrapper around c3's API.

 ## Props
 `data` is simply c3js's configuration object -- which is basically just a Javascript object passed in to the component.  Read the [docs](c3js.org) for more.

 `returnChart` is a function that should return the chart object.  You can manipulate this chart with flow functions as you see fit.

 `unflow` is a function to pass on the `componentWillUnmount` lifecycle hook.  If you have an `interval` attached to the chart, this will be necessary to detach the interval.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
