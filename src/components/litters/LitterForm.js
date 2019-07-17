import React from "react";

class LitterForm extends React.Component {
  state = {
    litter: {
      name: ""
    }
  }
  

  handleChange = (event) => {
    const litter = { ...this.state.litter, name: event.target.value }
    this.setState({ litter })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert(this.state.litter.name)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
              <h5 className="gray-text text-darken-d">Add Litter</h5>
          <div className="">
            <label htmlFor="name">Litter Name / Litter ID</label>
            <input 
            type="text" 
            id="name" 
            onChange={this.handleChange}
            value={this.state.litter.name}
             />
          </div>
          
          <div>
            <input type="submit" value="Save" />
          </div>
        </form>
      </div>
    )
  }
}

export default LitterForm;
