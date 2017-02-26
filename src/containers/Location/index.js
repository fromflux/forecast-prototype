import React, { Component } from 'react';
import styles from './styles.css';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import TextInput from '../../components/TextInput';
import LocationList from '../../components/LocationList';
import { BackIcon } from '../../components/Icons';
import { debounce } from '../../common/utils';

import { selectLocation, clearLocations, 
  fetchLocationsByPattern, fetchForecast } from '../../actions';

export class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.debouncedFetchByPattern = debounce(this.debouncedFetchByPattern, 500, false);
  }

  componentDidMount() {
    this.props.dispatch(clearLocations());
  }

  debouncedFetchByPattern(text) {
    this.props.dispatch(fetchLocationsByPattern(text));
  }

  handleInputChange(text) {
    if (text.length > 2) {
      this.debouncedFetchByPattern(text);
    } else {
      this.props.dispatch(clearLocations());
    }
    this.setState({
      inputText: text
    });
  }

  handleItemSelect(item) {
    this.props.dispatch(selectLocation(item));
    this.props.dispatch(fetchForecast(item.id));

    if (this.props.location.action !== 'REPLACE' &&
        this.props.location.action !== 'POP') {
      browserHistory.goBack();
    } else {
      browserHistory.replace('/');
    }
  }

  render() {
    return (
      <div className={styles.Location}>
        <div className={styles.Header}>
          <div onClick={browserHistory.goBack}><BackIcon /></div>
          <TextInput
            value={this.state.inputText}
            placeholder='Enter a location name'
            autoFocus={true}
            onChange={this.handleInputChange} />
        </div>
        <div className={styles.ListWrapper}>
          <LocationList items={this.props.matchedItems} onSelect={this.handleItemSelect}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    matchedItems: state.reducer.locations
  }
}

export default connect(mapStateToProps)(Location);