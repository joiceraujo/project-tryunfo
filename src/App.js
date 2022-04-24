import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import List from './components/List';
import Filter from './components/Filter';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    hasTrunfo: false,
    filterCard: '',
    filterRare: 'todas',
    filterTrunfo: false,
  }

  validateInput = () => {
    const inputs = { ...this.state };
    const limitAttr = 90;
    let attrValid = false;
    const limitSum = 210;
    const attrSum = +inputs.cardAttr1 + +inputs.cardAttr2 + +inputs.cardAttr3;
    if (
      inputs.cardAttr1 <= limitAttr && inputs.cardAttr1 >= 0
      && inputs.cardAttr2 <= limitAttr && inputs.cardAttr2 >= 0
      && inputs.cardAttr3 <= limitAttr && inputs.cardAttr3 >= 0
      && attrSum <= limitSum
    ) {
      attrValid = true;
    }

    if (
      inputs.cardName.trim() !== ''
      && inputs.cardImage.trim() !== ''
      && inputs.cardDescription.trim() !== ''
      && inputs.cardRare.trim() !== ''
      && attrValid === true
    ) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    return this.setState({ isSaveButtonDisabled: true });
  }

  onInputChange = ({ target }) => {
    const { type, checked, value, name } = target;
    const targetValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: targetValue,
    }, this.validateInput);
  }

  onSaveButtonClick = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cards,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };

    const list = cards;
    list.push(card);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: list,
      hasTrunfo: false,
      filterCard: '',
      filterRare: 'todas',
      filterTrunfo: false,
    });

    this.checkTrunfo();
  }

  checkTrunfo = () => {
    const { cards } = this.state;
    const trunfo = cards.some(({ cardTrunfo }) => cardTrunfo);
    this.setState({
      hasTrunfo: trunfo,
    });
  }

  deleteCard = (cardDeleted) => {
    this.setState((prevState) => ({
      cards: prevState.cards.filter(({ cardName }) => cardName !== cardDeleted),
    }), this.checkTrunfo);
  }

  onFilterList = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.id]: value,
    });
  }

  render() {
    const { cards, filterCard, filterRare, filterTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
        <Filter
          onFilterList={ this.onFilterList }
          filterCard={ filterCard }
          filterRare={ filterRare }
          filterTrunfo={ filterTrunfo }
        />
        <List
          cards={ cards }
          deleteCard={ this.deleteCard }
          filterName={ filterCard }
          filterRare={ filterRare }
          filterTrunfo={ filterTrunfo }
        />
      </div>
    );
  }
}

export default App;
