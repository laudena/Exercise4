/**
 * Created by mht-stud6 on 24/01/2016.
 */
import Store from '../store';
import Dispatcher from '../dispatcher';
import symbols from '../symbols';
import _ from 'underscore';

const MenuStore = Object.assign({}, Store, {
    children: [],
    selectedIdx : 0,

    showItem: function(index){
        this.selectedIdx = index;
        this.trigger();
    },
    addItem: function(element){
        //add item proedure
        console.log("add item");
    }

});



MenuStore.dispatchToken = Dispatcher.register(function(action) {
    switch(action.type) {
        // handle incoming events and modify store data
        case symbols.SHOW_MENU_ITEM:
            MenuStore.showItem(index);
            break;
        case symbols.Add_MENU_ITEM:
            MenuStore.addItem(element);
            break;
    }

});

export default MenuStore;

