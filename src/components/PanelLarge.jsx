var React = require('react');
var PanelLargeBottom = require('./PanelLargeBottom.jsx')

var PanelLarge = React.createClass({
  render: function(){
    panelLargeStyle = {
      backgroundColor: this.props.panelLargeColor,
      marginTop:10,
      marginBottom:10
    };

    panelDefaultStyle = {
      background: this.props.panelDefaultColor,
      minHeight:160,
      border:0
    };

    divStyle = {
      backgroundColor: this.props.panelBodyColor,
      minHeight:100,
      textAlign:'center',
      marginTop:0,
      marginBottom:0,
      color: this.props.panelTextColor,
      border:0
    };

    return (
      <div className="col-sm-9" >
        <div className="panel panel-default" style={panelLargeStyle}>
          <div className="panel-heading" style={panelDefaultStyle}> </div>
          <div className="panel panel-body" style={divStyle}>
              <div className="col-xs-4 " >
                <p> <b> { this.props.title1} </b> </p>
                <p> { this.props.desctiption1 } </p>
              </div>
              <div className="col-xs-4">
                <p> <b> { this.props.title2 } </b> </p>
                <p> { this.props.desctiption2 } </p>
              </div>
              <div className="col-xs-4">
                <p> <b> { this.props.title3 } </b> </p>
                <p> { this.props.desctiption3 } </p>
              </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PanelLarge ;
