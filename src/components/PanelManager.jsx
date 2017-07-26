var React = require('react');
var PanelHeaderTop = require('./PanelHeaderTop.jsx');
var PanelTopCentered = require('./PanelTopCentered.jsx');
var PanelLarge = require('./PanelLarge.jsx');
var PanelRight = require('./PanelRight.jsx');

var PanelManager = React.createClass({
  render: function(){
    divStyle = {
      background:'lightgrey'
    } ;

    return (
      <div className="container" style={divStyle}>
        <div className="row">
          <PanelHeaderTop panelBodyColor='white' title="20" desctiption="New followers added this month"/>
          <PanelHeaderTop panelBodyColor='white' title="$ 1250" desctiption="Average monthly income"/>
          <PanelHeaderTop panelBodyColor='white' title="$ 13865" desctiption="Yearly income Goal"/>
          <PanelTopCentered panelBodyColor='orange' title="18°" desctiption="Paris"/>
        </div>
        <div className="row">
          <PanelLarge panelDefaultColor='blue' panelBodyColor='black' panelTextColor='white'
            title1="15080" desctiption1="Shot Views"
            title2="12000" desctiption2="Likes"
            title3="5100" desctiption3="Comments"/>
          <PanelRight panelBodyColor='lightblue' panelTextColor='white' title="New visitor" desctiption="1.5K"/>
          <PanelRight panelBodyColor='lightpink' panelTextColor='white' title="Bounce Rate" desctiption="50%"/>
        </div>
      <div className="row">
        <PanelLarge panelDefaultColor='pink' panelBodyColor='black' panelTextColor='white'
          title1="15080" desctiption1="Shot Views"
          title2="12000" desctiption2="Likes"
          title3="5100" desctiption3="Comments"/>
        <PanelRight panelBodyColor='red' panelTextColor='white' title="New visitor" desctiption="1.5K"/>
        <PanelRight panelBodyColor='green' panelTextColor='white' title="Bounce Rate" desctiption="50%"/>
      </div>
    </div>
    )
  }
});

module.exports = PanelManager ;
