import { Component } from 'react';

class MenuItem extends Component{
    render() {
        return (
            <div>
                <p>{this.props.menuItem.name}</p>
                <button onClick={() => this.props.addToOrder(this.props.menuItem)}>Add to order</button>
            </div>
        )
    }
}

export default MenuItem;