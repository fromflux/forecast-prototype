# fromflux/forecast-prototype

This is the source code for the app prototype available [here](http://forecast-prototype.herokuapp.com/).

## Installation

```
npm install
```

Register with [OpenWeatherMap](http://openweathermap.org/) and add the following to a file named ```.env``` at the root directory of the project

```
API_KEY=<YOUR OPEN WEATHER API KEY>
```

## Development Server
```
# start local development server
npm start

# open in your browser
http://localhost:3000/
```

## Running tests

```
npm test
```

## TODOS
- [ ] Complete test coverage
- [ ] Implement responsive layout
- [ ] Custom weather icons / Map API icon codes
- [ ] Store selected location locally
- [ ] Create todays forecast view
- [ ] Allow for multiple stored locations

## License

Copyright (c) 2017 Rod Melo

GPL-3.0 (https://opensource.org/licenses/GPL-3.0)