import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state={
    filterString:"",
    cities:["Miami","New York","Paris","Madrid","Rio de Janeiro", "Panama City"]
  }

handleChange = (filter) => {
  this.setState({filterString: filter})
}


  //** */

  render() {

let citiesToDisplay = this.state.cities.filter((e,i)=>{
  return e.includes(this.state.filterString)
}).map((e,i)=>{
  return <h2 key={i}>{e}</h2>
});

return <div className='App'>
    <input onChange={e=>this.handleChange(e.target.value)} type="text" placeholder='Type in here' />  
  {citiesToDisplay}
</div>;

}}


export default App;
