var React = require('react');

var PanelLargeBottom = React.createClass({
  render: function(){
    PanelDefaultStyle = {
      backgroundColor: this.props.panelDefaultColor,
      color: this.props.panelTextColor,
    };

    divStyle = {
      backgroundColor: this.props.panelBodyColor
    };

    return (
      <div className="col-sm-4">
        <div className="panel panel-default" style={PanelDefaultStyle} >
            <div className="pannel panel-heading" ></div>
            <div className="pannel panel-body" >
                <p> <b>{this.props.title} </b> </p>
                <p> {this.props.desctiption} </p>
            </div>

        </div>
      </div>
    );
  }
});

module.exports = PanelLargeBottom ;
