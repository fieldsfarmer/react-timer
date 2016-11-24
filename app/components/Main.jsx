var React = require('react');
var Nav = require('Nav');

var Main = (props)=>(
  <div>
    <div>
      <Nav/>
      <div>
        <p>Main component</p>
        {props.children}
      </div>
    </div>
  </div>
)


module.exports = Main;
