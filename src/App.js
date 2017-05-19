import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import HeaderTest from './HeaderTest.js';
import Header from './components/Header.js';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <div className="App-header">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/2006-01-14_Surface_waves.jpg/300px-2006-01-14_Surface_waves.jpg" className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/2006-01-14_Surface_waves.jpg/300px-2006-01-14_Surface_waves.jpg" className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}


export default App;
