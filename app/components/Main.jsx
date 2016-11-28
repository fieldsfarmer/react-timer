var React = require('react');
var Nav = require('Nav');

var Main = (props)=>(
  <div>
    <Nav/>
    <div className="row">
      <div className="column large-4 medium-6 small-centered">
        {props.children}
      </div>
    </div>
  </div>
)


module.exports = Main;
