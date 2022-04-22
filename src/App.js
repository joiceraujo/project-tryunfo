import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import List from './components/List';
import Filter from './components/Filter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardsList: [],
      filterIsActive: false,
      filteredList: [],
      filterName: '',
      rareFilter: 'todas',
      showSuperTrunfo: false,
    };
    
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
        <List />
        <Filter />
      </div>

    );
  }
}

export default App;
