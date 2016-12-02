var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var Countdown = require('Countdown');

describe('Countdown', ()=>{
  it('it should exist', ()=>{
    expect(Countdown).toExist();
  });
  describe('handleSetCountdown', ()=>{
    it('should set state and countdown',(done)=>{
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      },1001);
    });

    it('should never be negtive',(done)=>{
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      },3001);
    });
  });
});
