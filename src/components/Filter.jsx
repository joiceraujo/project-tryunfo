import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { filterName, filterCards, rareFilter, showSuperTrunfo } = this.props;
    return (
      <div>
        <input
          value={ filterName }
          type="text"
          name="filterName"
          placeholder="Nome"
          data-testid="name-filter"
          onChange={ filterCards }
          disabled={ showSuperTrunfo }
        />
        <select
          value={ rareFilter }
          name="rareFilter"
          data-testid="rare-filter"
          onChange={ filterCards }
          disabled={ showSuperTrunfo }
        >

          <option value="total">Total</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <label htmlFor="checkTrunfo">
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            name="showSuperTrunfo"
            checked={ showSuperTrunfo }
            onChange={ filterCards }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterCards: PropTypes.func.isRequired,
  rareFilter: PropTypes.string.isRequired,
  showSuperTrunfo: PropTypes.bool.isRequired,
};

export default Filter;
