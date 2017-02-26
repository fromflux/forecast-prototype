import React, { Component } from 'react';
import styles from './styles.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onSelect(this.props.item);
  }

  render() {
    return (
      <li className={styles.ListItem} onClick={this.handleClick}>
        <div>{this.props.item.name}, {this.props.item.country}</div>
      </li>
    );
  }
}

ListItem.propTypes = {
  item: React.PropTypes.shape({
    name: React.PropTypes.string,
    country: React.PropTypes.string
  }).isRequired,
  onSelect: React.PropTypes.func
};

export default ListItem;