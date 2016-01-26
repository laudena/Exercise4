import React from 'react';
import _ from 'underscore';

export default React.createClass({
  propTypes: {
    boxCount: React.PropTypes.number
  },
  // return default property values
  getDefaultProps: function() {
    return {
      boxCount: 5
    };
  },
  getInitialState: function () {
    return {
      text: "Please type something..."
    };
  },

  handleTextChange: function(e) {
    var text = e.target.value;
    this.setState({ text: text });
  },

  renderItem: function(item) {
    return (<input
      onChange={this.handleTextChange}
      type="text"
      value={this.state.text}
    />);
  },

  render: function () {
    return (<div>
      {_.range(this.props.boxCount).map(this.renderItem)}
    </div>);
  }
});

























