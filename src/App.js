import { Component } from 'react';
import './App.css';
import MenuList from './components/MenuList'

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuItems: [],
    }

    this.addToOrder = this.addToOrder.bind(this);
  }

  componentDidMount() {
    const menuItems = [
      {name: 'one'},
      {name: 'two'},
      {name: 'three'}
    ];

    this.setState({ menuItems: menuItems})
  }

  addToOrder(menuItem) {
    console.log(menuItem);
  }

  render() {
    
    return (
      <div>
        <MenuList menuItems={this.state.menuItems} addToOrder={this.addToOrder} />
      </div>
    )
  }
}

export default App;
