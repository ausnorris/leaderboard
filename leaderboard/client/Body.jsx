var React = require('react');
var Leaderboard = require('./Leaderboard.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <div className="app">
        <div className="outer">
          <div className="logo"></div>
          <h1 className="title">"Canberra TAM of the Year Poll"</h1>
          <div className="subtitle">Select a TAM to give them points</div>
          <Leaderboard />
        </div>
      </div>
    );
  }
});

module.exports = Body;
