import React from 'react';
import './App.css';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 100,
      clicked: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      counter: this.state.counter + 1,
      clicked: 'clicked'
    }))
  } 
  handleDoubleClick() {
      this.setState({
        counter: this.state.counter - 2,
        clicked: null
      })
  }
  /* this also works for all three components
  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    })
  } 
  */
  render() {
    return (
      <>
        <h3>Bind Method</h3>
        <button className="button-style" onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>
          <div className={this.state.clicked ? 'clicked' : null}>Like | {this.state.counter}</div>
        </button>
        <hr style={{width: "500px"}}/>
      </>
    )
  }
}

class PublicClassField extends React.Component {
  state = {
    counter: 200,
    clicked: null
  }
  handleClick = () => {
    this.setState(state => ({
      counter: this.state.counter + 1,
      clicked: 'clicked'
    }))
  }
  handleDoubleClick = () => {
    this.setState(state => ({
      counter: this.state.counter - 2,
      clicked: null
    }))
  }
  render() {
    return (
      <>
        <h3>Public Class Field Syntax</h3>
        <button className="button-style" onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>
          <div className={this.state.clicked ? 'clicked' : null}>Like | {this.state.counter}</div>
        </button>
        <hr style={{width: "500px"}}/>
      </>
    )
  }
}

class ArrowEvent extends React.Component {
  state = {
    counter: 300,
    clicked: null
  }
  handleClick() {
    this.setState(state => ({
      counter: this.state.counter + 1,
      clicked: 'clicked'
    }))
  }
  handleDoubleClick() {
    this.setState(state => ({
      counter: this.state.counter - 2,
      clicked: null
    }))
  }
  render() {
    return (
      <>
        <h3>Arrow Function in Callback</h3>
        <button className="button-style" onClick={(e) => this.handleClick(e)} onDoubleClick={(e) => this.handleDoubleClick(e)}>
          <div className={this.state.clicked ? 'clicked' : null}>Like | {this.state.counter}</div>
        </button>
        <hr style={{width: "500px"}}/>
      </>
      
    )
  }
}

class BindInRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 400,
      clicked: null
    }
  }
  handleClick(e) {
    this.setState(state => ({
      counter: this.state.counter + 1,
      clicked: 'clicked'
    }))
  }
  handleDoubleClick(e) {
    this.setState(state => ({
      counter: this.state.counter - 2,
      clicked: null
    }))
  }
  render() {
    return(
      <>
        <h3>Bind in Render</h3>
        <button className="button-style" 
          onClick={this.handleClick.bind(this)}
          onDoubleClick={this.handleDoubleClick.bind(this)}
          >
          <div className={this.state.clicked ? 'clicked' : null}>Like | {this.state.counter}</div>
        </button>
        <hr style={{width: "500px"}}/>
      </>

    )
  }
}

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <CounterApp/>
          <PublicClassField/>
          <ArrowEvent/>
          <BindInRender/>
          <div style={{marginBottom: "100px"}}></div>
        </header>
      </div>
    </>
  );
}

export default App;
