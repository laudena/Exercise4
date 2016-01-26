import React from 'react';
import Selector from './selector';
import TimeConverter from "./TimeConverter";
import Counter from "./counter";
import MultiInput from "./multi_input";
import FilteredList from "./filteredList";
import NewItem from "./newItemForm";
import _ from 'underscore';
import ReactDOM from 'react-dom';
import MenuStore from '../flux/stores/menu';
import MenuActions from '../flux/actions/menu';

var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];



export default React.createClass({
    getInitialState: function() {
        return this.stateFromStore(MenuStore);
    },

    // React Hook
    componentDidMount: function() {
        MenuStore.subscribe(this.handleStoreChange);
    },

    // React Hook
    componentWillUnmount: function() {
        MenuStore.unsubscribe(this.handleStoreChange);
    },

    handleStoreChange: function() {
        this.setState(this.stateFromStore(MenuStore));
    },

    stateFromStore: function(store) {
        return {
            selectedIdx: store.selectedIdx,
            children: store.children,
        };
    },

  getInitialState: function() {
      var children = [];
      //var child1 = React.createElement(Counter, {max:"10"});
      //var child2 = React.createElement(TimeConverter, null);
      var child3 = React.createElement(NewItem, {onNewItem:this.setNewItem});
      //children.push(child1);
      //children.push(child2);
      children.push(child3);

      return {children};
  },

  render: function () {
    /*var listOfItems = _.map(this.state.children, function(name) {
        if (name === "counter"){
            return '<Counter max="10" />';
        }
        else if (name === "TimeConverter"){
            return '<TimeConverter />';
        }
        else if (name === "multi_input"){
            return '<MultiInput  boxCount="7"/>';
        }
        else if (name === "filteredList"){
            return '<FilteredList items={days}/>';
        }
    });*/

      return (<div>
      <Selector>
          {this.state.children}
      </Selector>

    </div>)
  },
  setNewItem : function(item)
  {
      var child = null;
      switch (item)
      {
          case  'Counter': child = React.createElement(Counter, {boxCount:"6", max:"10",  items:days});
              break;
          case  'TimeConverter': child = React.createElement(TimeConverter, {boxCount:"6", max:"10",  items:days});
              break;
          case  'NewItem': child = React.createElement(NewItem, {boxCount:"6", max:"10",  items:days});
              break;
          case  'MultiInput': child = React.createElement(MultiInput, {boxCount:"6", max:"10",  items:days});
              break;
          case  'FilteredList': child = React.createElement(FilteredList, {items:days});
              break;


      }


      var curState = this.state.children;
      curState.push(child);
      this.setState({children :curState});
      console.log("GOT IT!!!!" + item);
  },
});



