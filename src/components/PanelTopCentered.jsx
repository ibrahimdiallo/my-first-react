var React = require('react');

var PanelTopCentered = React.createClass({
  render: function(){
    divStyle = {
      minHeigth:50,
      marginTop: 10,
      backgroundColor: this.props.panelBodyColor,
      color: 'white',
      textAlign: 'center'
    };
    var h3Styles = {
      fontSize: '26px'
    };
    return (
      <div className="col-sm-3">
          <div className="panel-default"  >
            <div className="panel panel-body" style={divStyle}>
                <h3 style={h3Styles}> {this.props.title} </h3>
                <p> {this.props.desctiption} </p>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = PanelTopCentered ;
