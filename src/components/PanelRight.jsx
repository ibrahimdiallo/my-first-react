var React = require('react');

var PanelRight = React.createClass({
  render: function(){
    divStyle = {
      minHeigth:100,
      marginTop:10
    } ;

    otherDivStyle = {
      background: this.props.panelBodyColor,
      color: 'white'
    } ;

    testStyle = {
      background: 'black',
      color: 'white'
    } ;

    return (
      <div className="col-sm-3" style = {divStyle} >
          <div className="panel panel-default" >
                <div style= {otherDivStyle} className="panel-heading">
                    <p> {this.props.title}  </p>
                    <p> <b> {this.props.desctiption}</b> </p>
                </div>
                <div className="panel-body"></div>
          </div>
      </div>
    );
  }
});

module.exports = PanelRight ;
