import React from 'react';
import styles from './styles.css';

import ListItem from '../ListItem';

const LocationList = ({ items, onSelect }) => {
  return (
    <ul className={styles.LocationList}>
      {items.map(item => <ListItem key={item.id} item={item} onSelect={onSelect} />)}
    </ul>
  );
}

LocationList.propTypes = {
  items: React.PropTypes.array.isRequired,
  onSelect: React.PropTypes.func.isRequired
};

export default LocationList;