const router = require('express').Router()
const request = require('request')

const cityData = require('./city.list.js')

const API_KEY = process.env.API_KEY

router.get('/locations', function(req, res) {
  let result = []
  if (req.query.search) {
    const pattern = req.query.search
    result = cityData.filter((item) => {
      return item.name.toLowerCase().startsWith(pattern.toLowerCase())
    })
  }
  res.json({
    list: result
  })
})

router.get('/locations/:locationId/forecast', function(req, res) {
  request({
    method: 'GET',
    uri: 'http://api.openweathermap.org/data/2.5/forecast',
    qs: {
      appid: API_KEY,
      id: req.params.locationId,
      mode: 'json',
      units: 'metric'
    }
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body))
    } else {
      console.error(error);
    }
  });
})

router.get('*', function (req, res) {
  res.json({
    error: '404'
  })
})

module.exports = router