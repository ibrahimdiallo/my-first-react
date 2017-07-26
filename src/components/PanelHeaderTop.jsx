var React = require('react');

var PanelHeaderTop = React.createClass({
  render: function(){
    PanelDefaultStyle = {
      backgroundColor: this.props.panelDefaultColor
    };

    divStyle = {
      minHeight:120,
      marginTop: 10,
      backgroundColor: this.props.panelBodyColor,
      color: this.props.panelTextColor
    };

    return (
      <div className="col-sm-3">
          <div className="panel-default" style={PanelDefaultStyle} >
            <div className="panel panel-body" style={divStyle} >
                <p> <b>{this.props.title} </b> </p>
                <p> {this.props.desctiption} </p>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = PanelHeaderTop ;
