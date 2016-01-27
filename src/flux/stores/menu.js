/**
 * Created by mht-stud6 on 24/01/2016.
 */
import Store from '../store';
import Dispatcher from '../dispatcher';
import symbols from '../symbols';
import _ from 'underscore';
import React from 'react';
import ReactDOM from 'react-dom';
import TimeConverter from "../../components/TimeConverter";
import Counter from "../../components/counter";
import MultiInput from "../../components/multi_input";
import FilteredList from "../../components/filteredList";
import NewItem from "../../components/newItemForm";
var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const MenuStore = Object.assign({}, Store, {
    children: [],
    selectedIdx : 0,

    showItem: function(index){
        this.selectedIdx = index;
        this.trigger();
    },
    addItem: function(item){
        //add item proedure
        var child = null;
        if (item.type != null && item.type.displayName === 'newItemForm')
        {
            child = React.createElement(NewItem, {boxCount:"6", max:"10",  items:days});
        }
        else
        {

            switch (item.selected) {
                case  'Counter':
                    child = React.createElement(Counter, {boxCount: "6", max: "10", items: days});
                    break;
                case  'TimeConverter':
                    child = React.createElement(TimeConverter, {boxCount: "6", max: "10", items: days});
                    break;
                case  'newItemForm':
                    child = React.createElement(NewItem, {boxCount: "6", max: "10", items: days});
                    break;
                case  'MultiInput':
                    child = React.createElement(MultiInput, {boxCount: "6", max: "10", items: days});
                    break;
                case  'FilteredList':
                    child = React.createElement(FilteredList, {items: days});
                    break;
            }
        }
        var curState = this.children;
        curState.push(child);
        this.children = curState;
        console.log("GOT IT!!!!" + item);
        this.trigger();
    }

});



MenuStore.dispatchToken = Dispatcher.register(function(action) {
    switch(action.type) {
        // handle incoming events and modify store data
        case symbols.SHOW_MENU_ITEM:
            MenuStore.showItem(action.payload);
            break;
        case symbols.Add_MENU_ITEM:
            MenuStore.addItem(action.payload);
            break;
    }

});

export default MenuStore;

