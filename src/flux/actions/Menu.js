import _ from 'underscore';

import Dispatcher from '../dispatcher';
import symbols from '../symbols';
import GameStore from '../stores/menu';

const actions = {
    changeViewedItem,
    AddNewItem
};

function changeViewedItem(index) {
    Dispatcher.dispatch({type: symbols.SHOW_MENU_ITEM, payload: index});
}
function AddNewItem(element) {
    Dispatcher.dispatch({type: symbols.Add_MENU_ITEM, payload: element});
}

export default actions;
