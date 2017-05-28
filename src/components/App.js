import React from 'react';
import Header from './Header';
import Order from './Order.js';
import Inventory from './Inventory';
import NotFound from './NotFound';

  class App extends React.Component {
    render() {
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="fresh seafood market"/>
          </div>
          <Order />
          <Inventory />
        </div>
      )

  }
}

export default App;
