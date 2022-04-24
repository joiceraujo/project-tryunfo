import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class List extends React.Component {
  render() {
    const { cards, deleteCard, filterName, filterRare, filterTrunfo } = this.props;
    let filteredCards = cards;
    if (filterName.trim() !== '') {
      filteredCards = cards.filter(({ cardName }) => cardName.includes(filterName));
    }
    if (filterRare !== 'todas') {
      filteredCards = filteredCards.filter(({ cardRare }) => cardRare === filterRare);
    }
    if (filterTrunfo) {
      filteredCards = filteredCards.filter(({ cardTrunfo }) => cardTrunfo === true);
    }

    const renderList = filteredCards.map((card) => (
      <div key={ card.cardName }>
        <Card key={ card.cardName } { ...card } />
        <button
          type="button"
          onClick={ () => deleteCard(card.cardName) }
          data-testid="delete-button"
        >
          Excluir
        </button>
      </div>
    ));
    return (
      <div>
        <h1>Todas as Cartas</h1>
        { renderList }
      </div>
    );
  }
}

List.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCard: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default List;
