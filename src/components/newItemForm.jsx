import React from 'react';

export default React.createClass({
    propTypes: {
        onNewItem: React.PropTypes.func
    },
    getInitialState: function() {
        return {
            selected : "counter"
        };
    },


    setState: function(e){
        this.state = { selected: e.target.value}
    },
    createNew: function(s) {
        console.log(this.state);
        this.props.onNewItem(this.state.selected);
    },

    render: function() {
        return (<div>
            <p>Please select from the following types: {this.state.n}</p>
            <label className="radio-inline"><input type="radio" name="optradio" value="Counter" onClick={this.setState} />counter</label>
            <label className="radio-inline"><input type="radio" name="optradio" value="FilteredList" onChange={this.setState}/>filteredList</label>
            <label className="radio-inline"><input type="radio" name="optradio" value="MultiInput" onChange={this.setState}/>multi_input</label>
            <label className="radio-inline"><input type="radio" name="optradio" value="TimeConverter" onChange={this.setState}/>TimeConverter</label>
        <button onClick={this.createNew}>Generate Now!</button>
        </div>);
    }
});
