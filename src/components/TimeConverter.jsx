import React from 'react';
import _ from 'underscore';

export default React.createClass({
  getInitialState: function () {
    return {
      time: 0
    };
  },

  changeValue: function(factor, e) {
    this.setState({ time: e.target.value * factor });
  },

  render: function () {
    return (<div>
      <label>
        Seconds
        <input type="number"
               value={this.state.time}
               onChange={_.partial(this.changeValue, 1)} />
      </label>

      <label>
        Minutes
        <input type="number"
               value={this.state.time / 60}
               onChange={_.partial(this.changeValue, 60)} />
      </label>

      <label>
        Hours
        <input type="number"
               value={this.state.time / 3600}
               onChange={_.partial(this.changeValue, 3600)} />
      </label>
    </div>);
  }
});








