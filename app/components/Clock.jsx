var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function(){
    return{
      totalSeconds: 0
    }
  },
  propTypes:{
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(total){
    let s = total%60,
        m = Math.floor(total/60)%3600,
        h = Math.floor(total/3600);
    if(s<10){
      s = '0'+s;
    }
    if(m<10){
      m = '0'+m;
    }
    if(h<10){
      h = '0'+h;
    }
    return h+':'+m+':'+s;
  },
  render: function(){
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <div className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </div>
      </div>
    )
  }
});

module.exports = Clock;
