
import Selector from './selector';
import TimeConverter from "./TimeConverter";
import Counter from "./counter";
import MultiInput from "./multi_input";
import FilteredList from "./filteredList";
import NewItem from "./newItemForm";
import _ from 'underscore';
import React from 'react';
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
        this.newItemCreator();
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

  /*getInitialState: function() {
      var children = [];
      //var child1 = React.createElement(Counter, {max:"10"});
      //var child2 = React.createElement(TimeConverter, null);
      var child3 = React.createElement(NewItem, {onNewItem:this.setNewItem});
      //children.push(child1);
      //children.push(child2);
      children.push(child3);

      return {children};
  },*/
    newItemCreator: function() {
        var child3 = React.createElement(NewItem, {onNewItem:this.setNewItem});
        this.setNewItem(child3);

    },

  render: function () {
     return (<div>
      <Selector>
          {this.state.children}
      </Selector>

    </div>)
  },
  setNewItem : function(item)
  {
      MenuActions.AddNewItem(item);

  },
});



