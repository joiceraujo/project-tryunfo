import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { onFilterList, filterCard, filterRare, filterTrunfo } = this.props;
    return (
      <div>
        <h2>Filtrar</h2>
        <input
          id="filterCard"
          type="text"
          data-testid="name-filter"
          value={ filterCard }
          onChange={ onFilterList }
        />
        <select
          id="filterRare"
          data-testid="rare-filter"
          value={ filterRare }
          onChange={ onFilterList }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="filterTrunfo">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            id="filterTrunfo"
            value={ filterTrunfo }
            onChange={ onFilterList }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  onFilterList: PropTypes.func.isRequired,
  filterCard: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default Filter;
