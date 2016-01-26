import React from 'react';
import _ from 'underscore';

export default React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(
      React.PropTypes.string
    ).isRequired
  },

  getInitialState: function () {
    return {
      filter: ''
    };
  },

  setFilterText: function(ev) {
    this.setState({filter: ev.target.value});
  },

  render: function () {
    var items = _.filter(this.props.items, function(item) {
      return item.indexOf(this.state.filter) >= 0;
    }, this);

    var items2 = _.filter(this.props.items,
      (item) => item.indexOf(this.state.filter) >= 0 );

    var items3 = [];
    for (var i=0; i <this.props.items.length; i++) {
      if (this.props.items[i].indexOf(this.state.filter) >= 0) {
        items3.push(this.props.items[i]);
      }
    }


    return (<div>
      <input type="text" value={this.state.filter} onChange={this.setFilterText} />
      {_.map(items3, (i) => <p key={i}>{i}</p>)}
    </div>)
  }
});












