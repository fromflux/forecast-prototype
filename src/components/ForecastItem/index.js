import React from 'react'
import styles from './styles.css'
import classnames from 'classnames'

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const ForecastItem = ({ min, max, icon, description, date }) => {
  const weekDay = new Date(date).getDay()
  const weekDayStr = weekDay === new Date().getDay() ? (icon.slice(icon.length-1) === 'd' ? 'Today' : 'Tonight') : weekDays[weekDay]
  return (
    <div className={styles.forecastItem}>
      <div className={styles.column}>{weekDayStr}</div>
      <div className={styles.column}>  
        <img className={styles.forecastIcon} alt={description} src={`http://openweathermap.org/img/w/${icon}.png`}/>
      </div>
      <div className={styles.column}>{description}</div>
      <div className={classnames(styles.column, styles.rightAlign)}>{Math.round(max)}° max</div>
      <div className={classnames(styles.column, styles.rightAlign)}>{Math.round(min)}° min</div>
    </div>
  )
}

ForecastItem.propTypes = {
  min: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired,
  icon: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired
}

export default ForecastItem