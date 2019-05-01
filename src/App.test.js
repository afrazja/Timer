import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from'./components/clock'
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe('App',()=>{it ('should pass the test',()=>{
  expect(1).toBe(1);
});
});
describe('formatSeconds',()=>{
  it('should format',()=>{
    expect(Clock.formatSeconds(60)).toBe(1);
  });
});
