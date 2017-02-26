import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './styles.css'
import { browserHistory } from 'react-router'

import ForecastItem from '../../components/ForecastItem'

export class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.currentLocation.id) {
      browserHistory.replace('/location')
    }
  }

  forecastByDay(forecast) {
    const forecastByDay = {};

    forecast.forEach((item) => {
      const day = item.dt_txt.slice(0, 10)
      if (forecastByDay[day]) {
        forecastByDay[day].push(item)
      } else {
        forecastByDay[day] = [item]
      }
    })

    return forecastByDay
  }

  dailyForecast(forecastByDayItem) {
    return forecastByDayItem.reduce((acc, item) => {
      return Object.assign(acc, {
        date: !acc.date ? item.dt_txt.slice(0, 10) : acc.date,
        min: (acc.min > item.main.temp) ? item.main.temp : acc.min,
        max: (acc.max < item.main.temp) ? item.main.temp : acc.max,
        icon: (!acc.icon || item.dt_txt.slice(11) === '12:00:00') ? item.weather[0].icon : acc.icon,
        description: (!acc.description || item.dt_txt.slice(11) === '12:00:00') ? item.weather[0].description : acc.description
      })
    }, {
      date: null,
      min: Number.MAX_VALUE,
      max: Number.MIN_VALUE,
      icon: null,
      description: null
    })
  }

  render () {
    const forecastByDay = this.forecastByDay(this.props.forecast)
    const dailyForecast = Object.values(forecastByDay).map((item) => {
      return this.dailyForecast(item)
    })
    return (
      <div className={styles.Home}>
        <div className={styles.location}>{this.props.currentLocation.name}, {this.props.currentLocation.country}</div>
        <div className={styles.forecast}>
          {dailyForecast.map((item) => <ForecastItem key={item.date} {...item} />) }
        </div>
      </div>
    )  
  }
}

function mapStateToProps(state) {
  return { 
    currentLocation: state.reducer.currentLocation,
    forecast: state.reducer.forecast
  }
}

export default connect(mapStateToProps)(Home)