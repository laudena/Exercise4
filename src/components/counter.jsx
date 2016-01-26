import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      n: Math.floor(Math.random() * this.props.max),
      count: 0
    };
  },

  propTypes: {
    max: React.PropTypes.number.isRequired
  },

  shuffle: function() {
    this.setState({
      n: Math.floor(Math.random() * this.props.max),
      count: this.state.count + 1
    })
  },

  render: function() {
    return (<div >
        <label>
          Hello
          </label>
      <p>The number is: {this.state.n}</p>
      <p>You clicked {this.state.count} times</p>
      <button onClick={this.shuffle}>Get New</button>
    </div>);
  }
});