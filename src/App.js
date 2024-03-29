import React, { Component } from 'react';
import { Container, NavBar } from './components';
import logo from './favicon.ico';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Angular</h2>
        </div>
        <p className="App-intro">
          <NavBar/>
          <Container/>
        </p>
      </div>
    );
  }
}

export default App;



// import React, { Component } from 'react';
// import logo from './favicon.ico';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to Angular</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
