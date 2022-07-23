// import React from 'react';
import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}
// const Field = () => {
//   const holder = 'Type here';
//   const styleField = {
//     width: '300px',
//   };
//   return <input placeholder={holder} type='text' style={styleField}/>
// }
// class Field extends React.Component { 
class Field extends Component {   
  render() {
      const holder = 'Type here';
      const styleField = {
        width: '300px'
      };
      return <input placeholder={holder} type='text' style={styleField}/>
  }
}

function Btn() {
  const text = 'Log in';
  const logged = true;
  // const res = () => {
  //   return 'Log in'
  // }
  // const p = <p>Log in</p>
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
