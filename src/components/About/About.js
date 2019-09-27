import React, { Component } from 'react';

class About extends Component {
  // render() {
  //   return (
  //     <div>
  //       <h1>This is About page.</h1>
  //       <h2>Hi~Kabir~</h2>
  //     </div>
  //   );
  // }

  constructor(props) {
    super(props);
    this.state = {email: '', password: '', fruit: '',  isGoing: true, };
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handlePChange = this.handlePChange.bind(this);
    // this.handleFChange = this.handleFChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
debugger
    this.setState({
      [name]: value
    });
  }

  // handleChange(event) {
  //   this.setState({email: event.target.value});
  // }

  // handlePChange(event) {
  //   this.setState({password: event.target.value});
  // }
  // handleFChange(event) {
  //   this.setState({fruit: event.target.value});
  // }

  handleSubmit(event) {
    debugger
    alert('email was submitted: ' + this.state.email + 'and  password was submitted: ' +  this.state.password );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br/>

        <label>
          Email:
          <input type="text"   name="email" value={this.state.email} onChange={this.handleInputChange} />
        </label>
       <br/>
        <label>
          Password:
          <input type="password"   name="password" value={this.state.password} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Fruit:
          <select value={this.state.fruit}   name="fruit" onChange={this.handleInputChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        <div>
  values are: { JSON.stringify(this.state, null, 2) }
        </div>

      </form>
    );
  }


}

export default About;