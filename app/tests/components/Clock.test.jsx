var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var Clock = require('Clock');

describe('Clock', ()=>{
  it('should exist', ()=>{
    expect(Clock).toExist();
  });
  describe('render',()=>{
    it('should render clock output',()=>{
      let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      let $el = $(ReactDOM.findDOMNode(clock));
      let actual = $el.find('.clock-text').text();
      expect(actual).toBe('00:01:02');
    })
  });
  describe('formatSeconds', ()=>{
    it('should format seconds', ()=>{
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 615;
      let res = '00:10:15';
      let actual = clock.formatSeconds(seconds);
      expect(actual).toBe(res);
    })
  })
})
