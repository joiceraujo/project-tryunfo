import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
        <List />
      </div>

    );
  }
}

export default App;
