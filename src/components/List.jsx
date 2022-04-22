import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class List extends React.Component {
  render() {
    const { cardList, deleteCard } = this.props;

    return (
      <div>
        {cardList.map((card) => {
          const { name, description, attr1, attr2, attr3, image, rare, trunfo } = card;
          return (
            <div key={ name }>
              <Card
                cardName={ name }
                cardDescription={ description }
                cardAttr1={ attr1 }
                cardAttr2={ attr2 }
                cardAttr3={ attr3 }
                cardImage={ image }
                cardRare={ rare }
                cardTrunfo={ trunfo }
              />
              <button
                data-testid="delete-button"
                type="button"
                onClick={ deleteCard() }
              >
                Excluir
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

List.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      attr1: PropTypes.string.isRequired,
      attr2: PropTypes.string.isRequired,
      attr3: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rare: PropTypes.string.isRequired,
      trunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default List;
