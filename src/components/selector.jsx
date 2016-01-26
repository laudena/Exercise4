import React from 'react';
import _ from 'underscore';

export default React.createClass({
  propTypes: {
    children:  React.PropTypes.node,
               //React.PropTypes.arrayOf(React.PropTypes.node),
  },
  getInitialState: function() {
    return { selected: 0 };
  },
  selectItem: function(idx) {
    this.setState({selected: idx
                            });

  },
    newItem: function() {
        this.setState({selected: this.state.selected
                        });
    },
    setNewItem : function(item)
    {
        console.log("(not) GOT IT!!!!" + item);

    },
    showItem: function() {
        /*if (this.state.newItem)
            return this.props.children[this.props.children.length - 1];
        else*/
            return this.props.children[this.state.selected];

    },

  render: function () {
    var children = React.Children.toArray(this.props.children);
    var _item = this.showItem();
      //var d = showItem();
    return (<div className="container">
      <div className="col-xs-4">
      <ul className="nav nav-pills nav-stacked">
        {_.range(children.length ).map((index) => (
          <li>
          <a key={index} href="#"
            onClick={this.selectItem.bind(this, index)}>{children[index].type.displayName}</a>
          </li>

        ))}


      </ul>
      </div>

      <div className="col-xs-8">
          {_item}

      </div>

    </div>)
  }
});











